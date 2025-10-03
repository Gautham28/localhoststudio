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
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)'
      }}
    >
      {/* Main slider container - full viewport width */}
      <div className="relative">
        <motion.div
          className="flex gap-6"
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
              className="flex-shrink-0 w-[500px] h-[350px] rounded-xl overflow-hidden shadow-lg bg-white"
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