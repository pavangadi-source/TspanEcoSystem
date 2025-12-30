import { useState, useRef, useEffect } from "react";
import { useLanguage, languages, Language } from "@/context/LanguageContext";
import { ChevronDown, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find(l => l.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    } else if (e.key === "Enter" || e.key === " ") {
      setIsOpen(!isOpen);
    }
  };

  const selectLanguage = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative" data-testid="language-selector">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-primary/50 transition-all duration-300 text-slate-300 hover:text-white"
        aria-label="Select language"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        data-testid="language-selector-button"
      >
        <span className="text-lg">{currentLang.flag}</span>
        <span className="hidden sm:inline text-sm font-medium">{currentLang.code.toUpperCase()}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-56 rounded-xl bg-slate-900 border border-slate-700 shadow-xl shadow-black/20 overflow-hidden z-50"
            role="listbox"
            aria-label="Language options"
          >
            <div className="p-2">
              <div className="flex items-center gap-2 px-3 py-2 text-xs text-slate-500 font-mono uppercase tracking-wider border-b border-slate-800 mb-2">
                <Globe className="w-3 h-3" />
                Select Language
              </div>
              
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => selectLanguage(lang.code)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 ${
                    language === lang.code
                      ? "bg-primary/20 text-primary border border-primary/30"
                      : "hover:bg-slate-800 text-slate-300 hover:text-white border border-transparent"
                  }`}
                  role="option"
                  aria-selected={language === lang.code}
                  data-testid={`language-option-${lang.code}`}
                >
                  <span className="text-xl">{lang.flag}</span>
                  <div className="flex-1">
                    <span className="block text-sm font-medium">{lang.nativeName}</span>
                    <span className="block text-xs text-slate-500">{lang.name}</span>
                  </div>
                  {language === lang.code && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 bg-primary rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
