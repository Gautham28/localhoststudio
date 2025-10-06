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

  return (
    <footer
      style={{
        marginTop: 120,
        background: 'oklch(0.97 0 0)',
        border: '1px solid #e5e5e5',
        borderRadius: 28,
        padding: '72px 32px',
      }}
    >
      {/* Top row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1px 420px',
          gap: 32,
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
        <div
          style={{
            width: 1,
            height: '100%',
            background: '#e8e8e8'
          }}
        />

        {/* Right: CTA */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <p
            style={{
              margin: 0,
              color: '#333',
              fontSize: 28,
              lineHeight: 1.4,
              fontFamily:
                "Axiforma, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontWeight: 500
            }}
          >
            Ready to Start? lets&apos;s Talk
          </p>

          <button
            onClick={openModal}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 64,
              padding: '0 28px',
              background: '#111',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: 9999,
              fontSize: 18,
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
          marginTop: 56,
          paddingTop: 24,
          borderTop: '1px solid #e9e9e9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        <span
          style={{
            color: '#111',
            fontSize: 18,
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
            fontSize: 18,
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