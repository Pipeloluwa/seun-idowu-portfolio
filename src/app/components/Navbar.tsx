"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed! top-0! left-0! w-full! z-[9999] glass px-6 py-4 flex justify-between items-center"
    >
      {/* Animated Logo */}
      <motion.div 
        animate={{ 
          color: ["#ffffff", "#d4af37", "#ffffff"],
          textShadow: [
            "0 0 0px #d4af37",
            "0 0 10px #d4af37",
            "0 0 0px #d4af37"
          ]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="text-xl font-bold tracking-tighter cursor-default"
      >
        SEUN IDOWU
      </motion.div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        <div className="flex space-x-8 text-sm font-medium">
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
          <a href="#expertise" className="hover:text-accent transition-colors">Expertise</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>
      </div>

      {/* Mobile Actions */}
      <div className="flex items-center space-x-4 md:hidden">
        <button 
          className="text-2xl text-accent"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background border-b border-white/10 p-6 flex flex-col space-y-6 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              <a href="#about" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-accent">About</a>
              <a href="#projects" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-accent">Projects</a>
              <a href="#expertise" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-accent">Expertise</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-accent">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
