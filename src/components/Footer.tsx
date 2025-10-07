'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';
import { useContactModal } from '@/components/ContactModal';

function SocialIcon({
  children,
  href,
  label
}: {
  children: React.ReactNode;
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      style={{
        width: 72,
        height: 72,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fff',
        border: '1px solid #e5e5e5',
        borderRadius: 9999,
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
      }}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const { openModal } = useContactModal();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= 640);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <footer
      style={{
        marginTop: isMobile ? 72 : 120,
        background: 'oklch(0.97 0 0)',
        border: '1px solid #e5e5e5',
        borderRadius: 28,
        padding: isMobile ? '40px 16px' : '72px 32px',
      }}
    >
      {/* Top row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1px 420px',
          gap: isMobile ? 24 : 32,
          alignItems: 'center'
        }}
      >
        {/* Left: Logo block */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 40,
          alignItems: 'flex-start'    
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',   
            gap: 16
          }}>
            <Image
              src="/assets/logos/logodark2.svg"
              alt="localhost studio"
              width={520}
              height={200}
              priority
              style={{ height: 'auto', width: '100%', maxWidth: 560 }}
            />
          </div>

          {/* Social row aligned with logo left edge */}
          <div style={{
            display: 'flex',
            gap: 24,
            flexWrap: 'wrap',
            alignItems: 'center'
          }}>
            <SocialIcon href="https://www.instagram.com" label="Instagram">
              <Instagram size={26} color="#111" strokeWidth={2.5} />
            </SocialIcon>
            <SocialIcon href="https://twitter.com" label="Twitter">
              <Twitter size={26} color="#111" strokeWidth={2.5} />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com" label="LinkedIn">
              <Linkedin size={26} color="#111" strokeWidth={2.5} />
            </SocialIcon>
          </div>
        </div>

        {/* Divider */}
        {!isMobile && (
          <div
            style={{
              width: 1,
              height: '100%',
              background: '#e8e8e8'
            }}
          />
        )}

        {/* Right: CTA */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <p
            style={{
              margin: 0,
              color: '#333',
              fontSize: isMobile ? 22 : 28,
              lineHeight: 1.4,
              fontFamily:
                "Axiforma, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontWeight: 500
            }}
          >
            Ready to Start? let’s Talk
          </p>

          <button
            onClick={openModal}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: isMobile ? 52 : 64,
              padding: isMobile ? '0 22px' : '0 28px',
              background: '#111',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: 9999,
              fontSize: isMobile ? 16 : 18,
              fontWeight: 700,
              border: '1px solid #111',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              width: 'fit-content',
              cursor: 'pointer'
            }}
          >
            Book a call
          </button>
        </div>
      </div>

      {/* Bottom row */}
      <div
        style={{
          marginTop: isMobile ? 36 : 56,
          paddingTop: isMobile ? 16 : 24,
          borderTop: '1px solid #e9e9e9',
          display: 'flex',
          alignItems: isMobile ? 'flex-start' : 'center',
          justifyContent: isMobile ? 'space-between' : 'space-between',
          gap: 16,
          flexDirection: isMobile ? 'column' : 'row'
        }}
      >
        <span
          style={{
            color: '#111',
            fontSize: isMobile ? 16 : 18,
            fontWeight: 600,
            letterSpacing: 0.2,
            fontFamily:
              "Axiforma, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          }}
        >
          ©{year} localhost studio
        </span>

        <Link
          href="#"
          style={{
            color: '#111',
            opacity: 0.8,
            textDecoration: 'none',
            fontSize: isMobile ? 16 : 18,
            fontWeight: 500,
            fontFamily:
              "Axiforma, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          }}
        >
          Terms of Service
        </Link>
      </div>
    </footer>
  );
}