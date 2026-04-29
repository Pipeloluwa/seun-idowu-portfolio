"use client";
import React from "react";
import { motion } from "motion/react";
import { animateBlurIn } from "../animation/animationVariants";

interface ExpertiseCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const ExpertiseCard = ({ title, description, image, icon }: ExpertiseCardProps) => {
  return (
    <motion.div
      variants={animateBlurIn}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="relative group overflow-hidden rounded-2xl h-[400px] glass"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="text-accent text-3xl mb-4">{icon}</div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-foreground/70 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ExpertiseCard;
