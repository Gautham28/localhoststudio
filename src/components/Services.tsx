'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Tiles } from '@/components/ui/tiles';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08
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

type Service = {
  id: number;
  title: string;
  description?: string;
  tags?: string[];
};

const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Web Design',
    description:
      'Modern, user-friendly websites designed to engage visitors and drive results.',
    tags: ['Landing Pages', 'Portfolio Sites', 'Business Websites', '+2']
  },
  { id: 2,
    title: 'UI/UX Design',
    description:
      'Intuitive and beautiful digital experiences that captivate users.',
    tags: ['User Interface', 'User Experience', 'Wireframing', 'Prototyping']
   },
  { id: 3, 
    title: 'Branding',
    description:
      'Cohesive brand identities that tell your story and resonate with your audience.',
    tags: ['Logo Design', 'Brand Strategy', 'Visual Identity', 'Brand Guidelines'] },
  { id: 4, 
    title: 'App Development',
    description:
      'Innovative mobile and web applications designed for seamless functionality.',
    tags: ['iOS Apps', 'Android Apps', 'Cross-Platform', 'Web Applications']
   }
];

export default function Services() {
  const [openIndex, setOpenIndex] = React.useState<number>(0);

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
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.12 }}>
        <Tiles rows={40} cols={12} tileSize="md" />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header Row */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            variants={item}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 420px',
              gap: '24px',
              alignItems: 'end'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
                <h2 style={{
                  margin: 0,
                  fontSize: '72px',
                  lineHeight: 0.95,
                  letterSpacing: '-1px',
                  fontFamily: "Axiforma, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  fontWeight: 700,
                  color: '#bfbfbf'
                }}>OUR</h2>
              </div>
              <div style={{ marginTop: '-8px' }}>
                <h3 style={{
                  margin: 0,
                  fontSize: '72px',
                  lineHeight: 0.95,
                  letterSpacing: '-1px',
                  fontFamily: "Axiforma, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  fontWeight: 700
                }}>SERVICES.</h3>
              </div>
            </div>
            <div style={{ justifySelf: 'end', textAlign: 'left' }}>
              <p style={{
                margin: 0,
                fontSize: '16px',
                color: '#666',
                lineHeight: 1.6,
                fontFamily: "Axiforma, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              }}>
                We are your creative partners, blending strategy and expertise to build digital experiences that resonate with your audience. We believe in a collaborative process to bring your vision to life.
              </p>

            </div>
          </motion.div>

          {/* Divider */}
          <motion.div variants={item} style={{ height: '1px', background: '#e5e5e5', margin: '24px 0 8px' }} />

          {/* Accordion */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {SERVICES.map((service, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={service.id}
                  layout
                  transition={{ duration: 0.5, ease: EASE }}
                  style={{
                    borderRadius: '28px',
                    background: isOpen ? '#0f0f0f' : 'oklch(0.99 0 0)',
                    color: isOpen ? 'white' : 'black',
                    padding: isOpen ? '32px 72px' : '24px',
                    border: isOpen ? '1px solid #1f1f1f' : '1px solid #f0f0f0',
                    marginLeft: isOpen ? '-24px' : 0,
                    marginRight: isOpen ? '-24px' : 0,
                    minHeight: isOpen ? '286px' : undefined,
                    overflow: isOpen ? 'hidden' : 'visible'
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    style={{
                      all: 'unset',
                      display: 'grid',
                      gridTemplateColumns: isOpen ? '80px 1fr 300px 80px' : '80px 16px 1fr 80px',
                      alignItems: 'center',
                      gap: '16px',
                      width: '100%',
                      cursor: 'pointer'
                    }}
                  >
                    {/* Number */}
                    <div style={{
                      fontSize: '28px',
                      fontWeight: 600,
                      fontFamily: "Axiforma, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                      color: isOpen ? 'white' : '#1a1a1a'
                    }}>
                      {String(service.id).padStart(2, '0')}
                    </div>

                    {/* Dot when closed */}
                    {!isOpen && (
                      <div style={{ width: '8px', height: '8px', background: '#1a1a1a', borderRadius: 999 }} />
                    )}

                    {/* Title and content */}
                    <div style={{ width: '100%', minWidth: 0 }}>
                      <div style={{
                        fontSize: '32px',
                        fontWeight: 700,
                        marginBottom: isOpen ? '8px' : 0,
                        fontFamily: "Axiforma, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                      }}>
                        {service.title}
                      </div>

                      {isOpen && (
                        <div>
                          <p style={{ margin: 0, color: '#b3b3b3', maxWidth: '580px', lineHeight: 1.6 }}>
                            {service.description}
                          </p>
                          {/* Tags */}
                          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '16px' }}>
                            {service.tags?.map((tag) => (
                              <span
                                key={tag}
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  padding: '10px 14px',
                                  borderRadius: '999px',
                                  background: '#1b1b1b',
                                  color: 'white',
                                  fontSize: '14px',
                                  border: '1px solid #2a2a2a'
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Image stack when open */}
                    {isOpen && (
                      <div style={{ justifySelf: 'end', position: 'relative', height: '220px', pointerEvents: 'none' }}>
                        <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center' }}>
                          <div style={{ position: 'relative', width: '280px', height: '186px' }}>
                            <div style={{
                              position: 'absolute', inset: 0,
                              transform: 'rotate(-8deg) translateX(-8px)',
                              background: '#ffffff',
                              borderRadius: '24px',
                              overflow: 'hidden',
                              boxShadow: '0 20px 60px rgba(0,0,0,0.35)'
                            }}>
                              <Image src="/assets/images/uxora.png" alt="showcase" fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div style={{
                              position: 'absolute', inset: 0,
                              transform: 'rotate(8deg) translateX(8px)',
                              background: '#f4f4f4',
                              borderRadius: '24px',
                              overflow: 'hidden',
                              boxShadow: '0 20px 60px rgba(0,0,0,0.25)'
                            }}>
                              <Image src="/assets/images/darkdashboard.png" alt="showcase" fill style={{ objectFit: 'cover' }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Toggle Icon */}
                    <div style={{ justifySelf: 'end' }}>
                      <div style={{
                        width: 48,
                        height: 48,
                        borderRadius: 999,
                        background: isOpen ? '#e8ff2a' : '#0f0f0f',
                        color: isOpen ? '#0f0f0f' : '#ffffff',
                        display: 'grid',
                        placeItems: 'center',
                        fontSize: 24,
                        fontWeight: 700
                      }}>
                        {isOpen ? '−' : '+'}
                      </div>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}