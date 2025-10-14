import React from 'react';
import { cn } from '@/lib/utils';

export function PhoneMockup({ children, className }) {
  return (
    <div className={cn("relative mx-auto w-[300px] sm:w-[340px]", className)}>
      {/* Phone Frame */}
      <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl ring-1 ring-gray-800">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl z-10"></div>
        
        {/* Screen */}
        <div className="relative bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
          {children}
        </div>
      </div>
      
      {/* Side Buttons */}
      <div className="absolute right-0 top-24 w-1 h-12 bg-gray-800 rounded-l"></div>
      <div className="absolute right-0 top-40 w-1 h-16 bg-gray-800 rounded-l"></div>
      <div className="absolute left-0 top-32 w-1 h-8 bg-gray-800 rounded-r"></div>
    </div>
  );
}

