"use client";
import React from "react";
import { motion } from "motion/react";

interface ProjectVideoCardProps {
  title: string;
  youtubeId: string;
  description: string;
  useExternalLink?: boolean;
}

const ProjectVideoCard = ({ title, youtubeId, description, useExternalLink = false }: ProjectVideoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-secondary/20 rounded-3xl overflow-hidden border border-white/5 hover:border-accent/20 transition-all duration-500"
    >
      <div className="aspect-video w-full overflow-hidden relative">
        {useExternalLink ? (
          <a 
            href={`https://www.youtube.com/watch?v=${youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full relative group/video"
          >
            <img
              src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover/video:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover/video:bg-black/20 transition-colors">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-background transform group-hover/video:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-lg text-white text-xs font-bold text-center border border-white/10">
              Watch on YouTube (Embed Disabled)
            </div>
          </a>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        )}
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
