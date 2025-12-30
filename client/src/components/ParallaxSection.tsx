import { useEffect, useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
  offset?: [string, string];
}

export default function ParallaxSection({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
  offset = ["start end", "end start"]
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as ["start end", "end start"]
  });

  const yRange = direction === "up" ? [100 * speed, -100 * speed] : [-100 * speed, 100 * speed];
  const y = useTransform(scrollYProgress, [0, 1], yRange);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

export function ParallaxBackground({
  imageUrl,
  overlayOpacity = 0.7,
  speed = 0.3,
  className = "",
  children
}: {
  imageUrl?: string;
  overlayOpacity?: number;
  speed?: number;
  className?: string;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {imageUrl ? (
        <motion.div
          className="absolute inset-0 -z-10"
          style={{ y }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div 
            className="absolute inset-0 bg-slate-950" 
            style={{ opacity: overlayOpacity }} 
          />
        </motion.div>
      ) : (
        <motion.div
          className="absolute inset-0 -z-10"
          style={{ y }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </motion.div>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export function ParallaxText({
  text,
  className = "",
  speed = 0.2,
  direction = "left"
}: {
  text: string;
  className?: string;
  speed?: number;
  direction?: "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const xRange = direction === "left" ? [0, -500 * speed] : [-500 * speed, 0];
  const x = useTransform(scrollYProgress, [0, 1], xRange);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div 
        className="flex whitespace-nowrap"
        style={{ x }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="mx-8">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function ParallaxCard({
  children,
  className = "",
  depth = 1
}: {
  children: ReactNode;
  className?: string;
  depth?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50 * depth, -50 * depth]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.6]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y, scale, opacity }}
    >
      {children}
    </motion.div>
  );
}

export function MouseParallax({
  children,
  className = "",
  intensity = 20
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) / rect.width;
      const deltaY = (e.clientY - centerY) / rect.height;
      
      element.style.transform = `translate(${deltaX * intensity}px, ${deltaY * intensity}px)`;
    };

    const handleMouseLeave = () => {
      element.style.transform = "translate(0, 0)";
    };

    document.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [intensity]);

  return (
    <div 
      ref={ref} 
      className={`transition-transform duration-200 ease-out ${className}`}
    >
      {children}
    </div>
  );
}
