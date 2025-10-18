import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export function TestimonialCard({ name, role, image, quote, rating = 5, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "p-8 rounded-2xl bg-white border border-gray-200 shadow-lg",
        className
      )}
    >
      {/* Rating Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-orange-600 text-orange-600" />
        ))}
      </div>
      
      {/* Quote */}
      <p className="mb-6 text-gray-700 italic">"{quote}"</p>
      
      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-600 to-orange-500 flex items-center justify-center text-white overflow-hidden">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span>{name.charAt(0)}</span>
          )}
        </div>
        <div>
          <div className="font-semibold text-gray-900">{name}</div>
          <div className="text-gray-600">{role}</div>
        </div>
      </div>
    </motion.div>
  );
}

