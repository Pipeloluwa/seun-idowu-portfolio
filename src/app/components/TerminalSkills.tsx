"use client";
import React from "react";
import { motion } from "motion/react";

const skills = [
  { name: "Broadcast Journalism", level: 95 },
  { name: "Documentary Filmmaking", level: 90 },
  { name: "Piano Performance", level: 85 },
  { name: "Agro-Innovation", level: 80 },
  { name: "Digital Strategy", level: 88 },
];

const TerminalSkills = () => {
  return (
    <div className="w-full max-w-2xl mx-auto glass rounded-xl overflow-hidden font-mono text-sm">
      <div className="bg-white/10 px-4 py-2 flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
        <span className="text-foreground/40 text-xs ml-4">skills.sh — 80x24</span>
      </div>
      <div className="p-4 md:p-6 space-y-4">
        {skills.map((skill, index) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="text-accent">$ {skill.name}</span>
              <span className="text-foreground/40">{skill.level}%</span>
            </div>
            <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                className="h-full bg-accent"
              />
            </div>
          </div>
        ))}
        <div className="pt-4 flex items-center space-x-2">
          <span className="text-accent">seun@portfolio:~$</span>
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="w-2 h-4 bg-accent"
          />
        </div>
      </div>
    </div>
  );
};

export default TerminalSkills;
