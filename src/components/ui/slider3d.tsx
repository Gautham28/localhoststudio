'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Slider3DProps {
  images: string[];
}

export function Slider3D({ images }: Slider3DProps) {
  // Duplicate images multiple times for seamless loop
  const duplicatedImages = [...images, ...images, ...images, ...images];

  return (
    <div 
      className="relative overflow-hidden"
      style={{ 
        /* use small viewport units to avoid iOS/Chrome URL bar causing overflow */
        width: '100svw',
        marginLeft: 'calc(-50svw + 50%)',
        marginRight: 'calc(-50svw + 50%)'
      }}
    >
      {/* Main slider container - full viewport width */}
      <div className="relative">
        <motion.div
          className="flex gap-4 md:gap-6"
          animate={{ x: '-100%' }}
          transition={{ 
            duration: 20, 
            ease: 'linear',
            repeat: Infinity
          }}
        >
          {duplicatedImages.map((image, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 rounded-xl overflow-hidden shadow-lg bg-white w-[240px] h-[160px] sm:w-[320px] sm:h-[220px] md:w-[420px] md:h-[290px] lg:w-[500px] lg:h-[350px]"
            >
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                width={500}
                height={350}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}