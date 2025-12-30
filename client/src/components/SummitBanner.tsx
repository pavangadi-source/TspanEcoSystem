import { motion } from "framer-motion";
import { Link } from "wouter";
import summitImage from "@assets/generated_images/professional_summit_conference_banner.png";

export default function SummitBanner() {
  return (
    <section className="py-8 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Link href="/threat-intelligence" className="block">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 hover:border-primary/50 transition-all duration-300 shadow-2xl hover:shadow-[0_0_60px_rgba(6,182,212,0.2)]">
              <img
                src={summitImage}
                alt="Threat Intelligence Without Borders Summit - Feb 15, BITS Pilani Goa"
                className="w-full h-auto object-cover"
                data-testid="summit-banner-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
