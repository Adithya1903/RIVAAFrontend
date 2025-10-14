import React from 'react';
import { cn } from '@/lib/utils';
import { Wifi, Signal, Battery } from 'lucide-react';

export function AppScreenshot({ children, time = "9:41", className }) {
  return (
    <div className={cn("relative w-full h-full bg-gray-50", className)}>
      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 px-6 pt-3 pb-2 flex items-center justify-between text-gray-900 z-10">
        <span className="font-semibold">{time}</span>
        <div className="flex items-center gap-1">
          <Signal className="w-4 h-4" />
          <Wifi className="w-4 h-4" />
          <Battery className="w-5 h-5" />
        </div>
      </div>
      
      {/* Content */}
      <div className="pt-12 h-full overflow-hidden">
        {children}
      </div>
    </div>
  );
}

