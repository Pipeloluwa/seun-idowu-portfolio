"use client";
import React from "react";
import { motion } from "motion/react";

interface ProjectVideoCardProps {
  title: string;
  youtubeId: string;
  description: string;
}

const ProjectVideoCard = ({ title, youtubeId, description }: ProjectVideoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-secondary/20 rounded-3xl overflow-hidden border border-white/5 hover:border-accent/20 transition-all duration-500"
    >
      <div className="aspect-video w-full overflow-hidden relative">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
            {title}
          </h3>
          <a 
            href={`https://www.youtube.com/watch?v=${youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-white transition-colors text-sm font-bold uppercase tracking-widest whitespace-nowrap ml-4"
          >
            Watch ↗
          </a>
        </div>
        <p className="text-foreground/60 text-sm leading-relaxed line-clamp-2 italic">
          {description}
        </p>
      </div>
      
      {/* Decorative gradient corner */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};

export default ProjectVideoCard;
