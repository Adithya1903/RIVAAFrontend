import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export function FeatureCard({ icon: Icon, title, description, gradient = false, className }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "relative p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-shadow flex flex-col",
        gradient && "bg-gradient-to-br from-orange-50 to-white",
        className
      )}
    >
      {/* Icon */}
      <div className="mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br from-orange-600 to-orange-500 text-white shadow-lg">
        <Icon className="w-8 h-8" />
      </div>
      
      {/* Content */}
      <h3 className="mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 flex-1">{description}</p>
      
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-600/10 to-orange-500/10 opacity-0 hover:opacity-100 transition-opacity pointer-events-none"></div>
    </motion.div>
  );
}

