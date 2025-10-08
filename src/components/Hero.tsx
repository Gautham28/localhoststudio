'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { motion, Variants } from 'framer-motion';
import { Tiles } from '@/components/ui/tiles';
import { Slider3D } from '@/components/ui/slider3d';
import { useContactModal } from '@/components/ContactModal';

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
  const sliderImages = [
    '/assets/images/darkdashboard.png',
    '/assets/images/realestate.png',
    '/assets/images/sports.png',
    '/assets/images/uxora.png',
    '/assets/images/sports2.png'
  ];
  const { openModal } = useContactModal();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= 640);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <section style={{
        display: 'flex',
        flexDirection: 'column',
			gap: '16px',
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
			gap: '12px',
			position: 'relative',
			zIndex: 1,
			paddingTop: '4px'
		  }}>
			<img src="/assets/logos/logodark.svg" alt="Localhost Studio" style={{ width: isMobile ? 'min(140px, 32vw)' : 'min(160px, 40vw)' }} width={160} height={48} />
			<button
			  onClick={openModal}
			  style={{
				display: 'inline-flex',
				alignItems: 'center',
				justifyContent: 'center',
				height: 52,
				padding: '0 28px',
				background: '#fff',
				color: '#111',
				textDecoration: 'none',
				borderRadius: 9999,
				fontSize: 'clamp(12px, 3vw, 16px)',
				fontWeight: 700,
				border: '1px solid #111',
				boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
				width: 'fit-content',
				cursor: 'pointer',
				fontFamily: "Axiforma, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
				whiteSpace: 'nowrap',
				transition: 'all 0.2s ease-in-out'
			  }}
			  onMouseEnter={(e) => {
				e.currentTarget.style.background = '#111';
				e.currentTarget.style.color = '#fff';
				e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
			  }}
			  onMouseLeave={(e) => {
				e.currentTarget.style.background = '#fff';
				e.currentTarget.style.color = '#111';
				e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
			  }}
			>
			  Book a Call
			</button>
		  </div>

		<div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
		<motion.div
			  style={{ textAlign: 'center', margin: '0 auto', maxWidth: '900px', position: 'relative', zIndex: 1, paddingTop: isMobile ? '24px' : '64px' }}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            style={{
			  fontSize: isMobile ? '42px' : 'clamp(36px, 8vw, 80px)',
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
			  maxWidth: '720px',
			  fontSize: 'clamp(14px, 3.8vw, 20px)',
              color: '#555',
              marginBottom: 0,
              marginLeft: 'auto',
              marginRight: 'auto',
              fontFamily: "Axiforma, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontWeight: 400
            }}
            variants={item}
          >
			Building beautiful, scalable, and high-performing <span className="hidden sm:inline"><br/></span>web experiences from the ground up.
          </motion.p>

		  <motion.div style={{ marginTop: '32px' }} variants={item}>
			<button
			  onClick={openModal}
			  style={{
				display: 'inline-flex',
				alignItems: 'center',
				justifyContent: 'center',
				height: 52,
				padding: '0 28px',
				background: '#111',
				color: '#fff',
				textDecoration: 'none',
				borderRadius: 9999,
				fontSize: 16,
				fontWeight: 700,
				border: '1px solid #111',
				boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
				width: 'fit-content',
				cursor: 'pointer',
				fontFamily: "Axiforma, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
				transition: 'all 0.2s ease-in-out'
			  }}
			  onMouseEnter={(e) => {
				e.currentTarget.style.background = '#fff';
				e.currentTarget.style.color = '#111';
				e.currentTarget.style.transform = 'scale(1.05)';
				e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
			  }}
			  onMouseLeave={(e) => {
				e.currentTarget.style.background = '#111';
				e.currentTarget.style.color = '#fff';
				e.currentTarget.style.transform = 'scale(1)';
				e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
			  }}
			>
              Book a Call
            </button>
          </motion.div>

          {/* 3D Slider below the Book a Call button */}
		  <motion.div style={{ marginTop: isMobile ? '40px' : '64px' }} variants={item}>
            <Slider3D images={sliderImages} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}