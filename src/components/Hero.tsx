'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion, Variants } from 'framer-motion';
import { Tiles } from '@/components/ui/tiles';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
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

export default function Hero() {
  return (
    <section style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '0 0 0 0',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        // @ts-expect-error CSS var
        ['--tile']: 'oklch(0.97 0 0)'
      }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.35 }}>
        <Tiles rows={60} cols={14} tileSize="md" />
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        zIndex: 1
      }}>
        <img src="/assets/logos/logodark.svg" alt="Localhost Studio" width={180} height={48} />
        <Link href="/">
          <Button variant="outline" size="cta" className="border-black text-black">
            Book a Call
          </Button>
        </Link>
      </div>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div
          style={{ textAlign: 'center', margin: '0 auto', maxWidth: '900px', position: 'relative', zIndex: 1 }}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            style={{
              fontSize: '80px',
              lineHeight: 1.1,
              margin: 0,
              fontFamily: "Axiforma, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontWeight: 700
            }}
            variants={item}
          >
            Your Vision, Designed and Developed
          </motion.h1>

          <motion.p
            style={{
              marginTop: '12px',
              maxWidth: '800px',
              fontSize: '20px',
              color: '#555',
              marginBottom: 0,
              marginLeft: 'auto',
              marginRight: 'auto',
              fontFamily: "Axiforma, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontWeight: 400
            }}
            variants={item}
          >
            Building beautiful, scalable, and high-performing <br/>web experiences from the ground up.
          </motion.p>

          <motion.div style={{ marginTop: '24px' }} variants={item}>
            <Link href="/">
              <Button size="cta">
                Book a Call
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}