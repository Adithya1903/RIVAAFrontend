import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className,
  icon: Icon,
  ...props 
}) {
  const variants = {
    primary: 'bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:from-purple-700 hover:to-purple-600 shadow-lg shadow-purple-500/30',
    secondary: 'bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50',
    outline: 'bg-transparent text-gray-900 border-2 border-gray-300 hover:border-purple-600 hover:text-purple-600',
  };

  const sizes = {
    sm: 'px-4 py-2',
    md: 'px-6 py-3',
    lg: 'px-8 py-4',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
      {Icon && <Icon className="w-5 h-5" />}
    </motion.button>
  );
}

