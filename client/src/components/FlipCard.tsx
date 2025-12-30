import { motion } from "framer-motion";
import { useState } from "react";

interface FlipCardProps {
  frontImage?: string;
  frontTitle: string;
  frontSubtitle?: string;
  frontRole?: string;
  backTitle: string;
  backContent: string;
  backQuote?: string;
  className?: string;
  imageClassName?: string;
}

export default function FlipCard({
  frontImage,
  frontTitle,
  frontSubtitle,
  frontRole,
  backTitle,
  backContent,
  backQuote,
  className = "",
  imageClassName = ""
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`group perspective-1000 ${className}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      data-testid="flip-card"
    >
      <motion.div
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >
        {/* Front Side */}
        <div 
          className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700"
          style={{ backfaceVisibility: "hidden" }}
        >
          {frontImage ? (
            <div className={`w-full h-48 bg-gradient-to-br from-slate-800 to-slate-900 ${imageClassName}`}>
              <img 
                src={frontImage} 
                alt={frontTitle}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-slate-900 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 to-cyan-600/30 flex items-center justify-center border-2 border-primary/50">
                <span className="text-4xl font-display font-bold text-primary">
                  {frontTitle.charAt(0)}
                </span>
              </div>
            </div>
          )}
          
          <div className="p-6">
            <h3 className="text-xl font-display font-bold text-white mb-1">{frontTitle}</h3>
            {frontRole && (
              <p className="text-primary font-mono text-sm mb-2">{frontRole}</p>
            )}
            {frontSubtitle && (
              <p className="text-slate-400 text-sm">{frontSubtitle}</p>
            )}
            
            <div className="absolute bottom-4 right-4 opacity-50 group-hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-1 text-xs text-primary font-mono">
                <span>Hover for Vision</span>
                <svg className="w-4 h-4 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-slate-900 to-cyan-900/20 border border-primary/50"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
          
          <div className="relative z-10 h-full p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary font-mono text-xs uppercase tracking-wider">Vision Statement</span>
            </div>
            
            <h4 className="text-lg font-display font-bold text-white mb-3">{backTitle}</h4>
            
            <p className="text-slate-300 text-sm leading-relaxed flex-1">
              {backContent}
            </p>
            
            {backQuote && (
              <div className="mt-4 pt-4 border-t border-primary/30">
                <p className="text-primary/80 text-sm italic font-light">
                  "{backQuote}"
                </p>
              </div>
            )}
            
            <div className="absolute top-4 right-4 w-8 h-8 border border-primary/30 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function LeaderFlipCard({
  name,
  role,
  institution,
  image,
  vision,
  quote,
  className = ""
}: {
  name: string;
  role: string;
  institution?: string;
  image?: string;
  vision: string;
  quote?: string;
  className?: string;
}) {
  return (
    <FlipCard
      frontImage={image}
      frontTitle={name}
      frontRole={role}
      frontSubtitle={institution}
      backTitle={`${name}'s Vision`}
      backContent={vision}
      backQuote={quote}
      className={`h-80 ${className}`}
    />
  );
}
