import { motion } from "framer-motion";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  fullScreen?: boolean;
}

export default function LoadingSpinner({ 
  size = "md", 
  text = "Initializing Secure Connection...",
  fullScreen = false 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-16 h-16",
    lg: "w-24 h-24"
  };

  const containerClasses = fullScreen 
    ? "fixed inset-0 z-50 flex items-center justify-center bg-slate-950"
    : "flex flex-col items-center justify-center p-8";

  return (
    <div className={containerClasses} data-testid="loading-spinner">
      <div className="relative">
        {/* Outer rotating ring */}
        <motion.div
          className={`${sizeClasses[size]} rounded-full border-2 border-primary/30`}
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          {/* Glowing segment */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#06b6d4,0_0_20px_#06b6d4]" />
        </motion.div>

        {/* Middle ring - counter rotation */}
        <motion.div
          className={`absolute inset-2 rounded-full border border-dashed border-cyan-500/40`}
          animate={{ rotate: -360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner pulsing core */}
        <motion.div
          className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/20 to-cyan-600/20"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Center shield icon */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg 
            viewBox="0 0 24 24" 
            className={`${size === "lg" ? "w-8 h-8" : size === "md" ? "w-5 h-5" : "w-3 h-3"} text-primary fill-primary/30`}
          >
            <path 
              fill="currentColor" 
              d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"
            />
          </svg>
        </motion.div>

        {/* Orbiting particles */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_6px_#22d3ee]"
            style={{
              top: "50%",
              left: "50%",
            }}
            animate={{
              x: [0, Math.cos((i * 2 * Math.PI) / 3) * 30, 0],
              y: [0, Math.sin((i * 2 * Math.PI) / 3) * 30, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Corner brackets animation */}
        <motion.div
          className="absolute -inset-2"
          animate={{ rotate: [0, 90] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary/50" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary/50" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary/50" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary/50" />
        </motion.div>
      </div>

      {/* Loading text with typing effect */}
      {text && (
        <motion.div 
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.p 
            className="text-primary font-mono text-sm tracking-wider"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {text}
          </motion.p>
          <div className="flex items-center justify-center gap-1 mt-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 bg-cyan-500 rounded-full"
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
                transition={{ 
                  duration: 1, 
                  repeat: Infinity, 
                  delay: i * 0.2 
                }}
              />
            ))}
          </div>
        </motion.div>
      )}

      {/* Scan line effect for fullscreen */}
      {fullScreen && (
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          initial={{ opacity: 0.3 }}
        >
          <motion.div
            className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            animate={{ y: ["-100vh", "100vh"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      )}

      {/* Background grid pattern for fullscreen */}
      {fullScreen && (
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      )}
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <LoadingSpinner size="lg" fullScreen text="Establishing Secure Connection..." />
    </div>
  );
}

export function SectionLoader({ text = "Loading..." }: { text?: string }) {
  return (
    <div className="py-20">
      <LoadingSpinner size="md" text={text} />
    </div>
  );
}
