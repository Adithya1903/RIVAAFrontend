import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { cn } from '@/lib/utils';

export function StatCard({ value, suffix = '', label, icon: Icon, delay = 0, className }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const targetValue = typeof value === 'string' ? parseInt(value.replace(/\D/g, '')) : value;
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = targetValue / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        if (currentStep <= steps) {
          setCount(Math.floor(increment * currentStep));
        } else {
          setCount(targetValue);
          clearInterval(timer);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "p-8 rounded-2xl bg-white border border-gray-200 shadow-lg text-center",
        className
      )}
    >
      {Icon && (
        <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br from-purple-600 to-purple-500 text-white">
          <Icon className="w-6 h-6" />
        </div>
      )}
      <div className="mb-2 bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
        <span className="inline-block">{count.toLocaleString()}{suffix}</span>
      </div>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  );
}

