import { getUncachableStripeClient } from './stripeClient';
import { storage } from './storage';

async function seedStripeProducts() {
  try {
    const stripe = await getUncachableStripeClient();
    const courses = await storage.getCourses();
    
    console.log(`Found ${courses.length} courses to sync to Stripe...`);

    for (const course of courses) {
      try {
        const existingProducts = await stripe.products.search({
          query: `metadata['courseId']:'${course.id}'`
        });

        if (existingProducts.data.length > 0) {
          console.log(`Course "${course.title}" already exists in Stripe, skipping...`);
          continue;
        }

        const isValidUrl = (url: string | null | undefined) => {
          if (!url) return false;
          try {
            new URL(url);
            return url.startsWith('http://') || url.startsWith('https://');
          } catch {
            return false;
          }
        };

        const product = await stripe.products.create({
          name: course.title,
          description: course.description,
          images: isValidUrl(course.imageUrl) ? [course.imageUrl!] : [],
          metadata: {
            courseId: course.id,
            category: course.category,
            level: course.level,
            duration: course.duration,
          },
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: course.price * 100,
          currency: 'usd',
          metadata: {
            courseId: course.id,
          },
        });

        console.log(`Created product for "${course.title}": ${product.id} with price ${price.id} ($${course.price})`);
      } catch (err: any) {
        console.error(`Error creating product for "${course.title}":`, err.message);
      }
    }

    console.log('Stripe product sync completed!');
  } catch (error) {
    console.error('Error seeding Stripe products:', error);
    process.exit(1);
  }
}

seedStripeProducts()
  .then(() => {
    console.log('Done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Failed:', error);
    process.exit(1);
  });
