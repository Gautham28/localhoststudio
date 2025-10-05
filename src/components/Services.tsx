'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Tiles } from '@/components/ui/tiles';
import { Button } from '@/components/ui/button';
import FlowingMenu from '@/components/FlowingMenu';
import Link from 'next/link';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE }
  }
};

export default function Services() {
  const flowingMenuItems = [
    {
      link: '#web-development',
      text: 'WEB DEVELOPMENT',
      image: 'https://picsum.photos/600/400?random=1'
    },
    {
      link: '#ui-ux-design',
      text: 'UI/UX DESIGN',
      image: 'https://picsum.photos/600/400?random=2'
    },
    {
      link: '#app',
      text: 'APP DEVELOPMENT',
      image: 'https://picsum.photos/600/400?random=4'
    },
    {
      link: '#brand',
      text: 'BRAND IDENTITY',
      image: 'https://picsum.photos/600/400?random=5'
    },
  ];

  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '48px',
      padding: '120px 0',
      position: 'relative',
      overflow: 'hidden',
      // @ts-expect-error CSS var
      ['--tile']: 'oklch(0.97 0 0)'
    }}>
      {/* Background Tiles */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.2 }}>
        <Tiles rows={40} cols={12} tileSize="md" />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          style={{ textAlign: 'center', margin: '0 auto', maxWidth: '1200px' }}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={item}>
            <h2 style={{
              fontSize: '56px',
              lineHeight: 1.1,
              margin: 0,
              fontFamily: "Axiforma, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontWeight: 700,
              marginBottom: '16px'
            }}>
              Our Services
            </h2>
            <p style={{
              fontSize: '20px',
              color: '#555',
              margin: 0,
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
              fontFamily: "Axiforma, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontWeight: 400
            }}>
              Comprehensive digital solutions tailored to your business needs
            </p>
          </motion.div>

          {/* Flowing Menu Section */}
          <motion.div 
            style={{ marginTop: '80px' }}
            variants={item}
          >
            <div style={{ 
              height: '600px', 
              position: 'relative', 
              borderRadius: '16px', 
              overflow: 'hidden',
              background: 'white',
              border: '1px solid #e5e5e5'
            }}>
              <FlowingMenu items={flowingMenuItems} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}