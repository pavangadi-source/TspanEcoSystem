import { getStripeSync, getUncachableStripeClient } from './stripeClient';
import { storage } from './storage';

export class WebhookHandlers {
  static async processWebhook(payload: Buffer, signature: string): Promise<void> {
    if (!Buffer.isBuffer(payload)) {
      throw new Error(
        'STRIPE WEBHOOK ERROR: Payload must be a Buffer. ' +
        'Received type: ' + typeof payload + '. ' +
        'This usually means express.json() parsed the body before reaching this handler. ' +
        'FIX: Ensure webhook route is registered BEFORE app.use(express.json()).'
      );
    }

    const sync = await getStripeSync();
    await sync.processWebhook(payload, signature);

    const stripe = await getUncachableStripeClient();
    const event = stripe.webhooks.constructEvent(
      payload,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET || await sync.getWebhookSecret()
    );

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as any;
      
      // Verify payment was successful
      if (session.payment_status !== 'paid') {
        console.log(`Checkout session ${session.id} not paid, skipping enrollment`);
        return;
      }
      
      const courseId = session.metadata?.courseId;
      const userId = session.metadata?.userId;

      // Validate required metadata
      if (!courseId || !userId) {
        console.error(`Missing metadata in checkout session ${session.id}`);
        return;
      }

      try {
        // Verify the course exists
        const course = await storage.getCourse(courseId);
        if (!course) {
          console.error(`Course ${courseId} not found for checkout session ${session.id}`);
          return;
        }

        const existingEnrollments = await storage.getEnrollmentsByUser(userId);
        const alreadyEnrolled = existingEnrollments.some((e: any) => e.courseId === courseId);
        
        if (!alreadyEnrolled) {
          await storage.createEnrollment({
            userId,
            courseId,
            status: 'active',
            stripePaymentId: session.payment_intent || session.id,
            paidAmount: session.amount_total,
          });
          console.log(`Enrollment created for user ${userId} in course ${courseId} via webhook (session: ${session.id})`);
        }
      } catch (error) {
        console.error('Error creating enrollment from webhook:', error);
      }
    }
  }
}
