import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '0 0 0 0'
      }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <img src="/assets/logos/logodark.svg" alt="Localhost Studio" width={180} height={48} />
        <Link href="/">
          <Button variant="outline" size="cta" className="border-black text-black">
            Book a Call
          </Button>
        </Link>
      </div>

      <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: '900px' }}>
        <h1 style={{
          fontSize: '48px',
          lineHeight: 1.1,
          margin: 0,
          fontFamily: "Axiforma, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          fontWeight: 700
        }}>
          Your Vision, Designed and Developed
        </h1>
        <p style={{
          marginTop: '12px',
          maxWidth: '800px',
          fontSize: '18px',
          color: '#555',
          marginBottom: 0,
          marginLeft: 'auto',
          marginRight: 'auto',
          fontFamily: "Axiforma, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          fontWeight: 400
        }}>
          Building beautiful, scalable, and high-performing web experiences from the ground up.
        </p>
      </div>
    </section>
  );
}