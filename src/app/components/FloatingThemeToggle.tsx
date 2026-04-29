"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HiSun, HiMoon, HiDesktopComputer } from "react-icons/hi";
import { useTheme } from "./ThemeProvider";

const FloatingThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  const icons = {
    light: <HiSun size={20} />,
    dark: <HiMoon size={20} />,
    system: <HiDesktopComputer size={20} />,
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-3">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="flex flex-col gap-2 p-2 glass rounded-2xl border border-white/10 shadow-2xl"
          >
            {(["light", "dark", "system"] as const).map((t) => (
              <button
                key={t}
                onClick={() => {
                  setTheme(t);
                  setIsExpanded(false);
                }}
                className={`p-3 rounded-xl transition-all ${
                  theme === t 
                    ? "bg-accent text-background scale-110 shadow-lg" 
                    : "text-foreground/40 hover:text-foreground hover:bg-white/5"
                }`}
                title={`${t.charAt(0).toUpperCase() + t.slice(1)} Mode`}
              >
                {icons[t]}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 glass rounded-full flex items-center justify-center text-accent border border-accent/20 shadow-xl"
      >
        {icons[theme]}
      </motion.button>
    </div>
  );
};

export default FloatingThemeToggle;
