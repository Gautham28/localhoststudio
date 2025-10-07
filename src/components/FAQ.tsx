'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What types of projects does localhost studio work on?",
    answer: "We specialize in creating and revamping modern websites and web applications for businesses of all sizes. Whether you need a brand new site or want to bring new life to an old one, we've got you covered."
  },
  {
    id: 2,
    question: "How do we get started on a project?",
    answer: "It all begins with a free discovery call. We'll discuss your goals and vision, and from there, we'll put together a custom plan and proposal for your project."
  },
  {
    id: 3,
    question: "How long will it take to complete my project?",
    answer: "The timeline depends on the project's size and complexity. We'll give you a clear and honest estimate of the timeframe in your custom proposal. Our goal is to work efficiently while ensuring top quality."
  },
  {
    id: 4,
    question: "How much will a new website cost?",
    answer: "Every project is unique, so we don't have a fixed price. Once we understand your specific needs on our discovery call, we'll provide a transparent and detailed quote."
  },
  {
    id: 5,
    question: "Can you redesign my existing website?",
    answer: "Yes! We love to help businesses upgrade their online presence. We can work with you to redesign your site to be more modern, user-friendly, and effective."
  },
];

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(1); // First item open by default

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '120px 0',
      backgroundColor: 'white',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '800px',
        width: '100%',
        padding: '0 24px'
      }}>
        {/* FAQ Title */}
        <div style={{
          textAlign: 'center',
          marginBottom: 'min(56px, 12svh)'
        }}>
          <h2 style={{
            fontSize: 'clamp(28px, 10vw, 48px)',
            lineHeight: 1.1,
            margin: 0,
            fontFamily: "Axiforma, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontWeight: 700,
            color: '#1a1a1a',
            marginBottom: '12px',
            letterSpacing: '-0.02em'
          }}>
            Frequently Asked Questions
          </h2>
          <p style={{
            fontSize: 'clamp(14px, 4.2vw, 18px)',
            color: '#666',
            margin: 0,
            fontFamily: "Axiforma, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontWeight: 400
          }}>
            Everything you need to know about our services
          </p>
        </div>

        {/* FAQ Items */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {faqData.map((item) => (
            <motion.div
              key={item.id}
              style={{
                backgroundColor: 'white',
                border: '1px solid #e5e5e5',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                cursor: 'pointer'
              }}
              whileHover={{ 
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                borderColor: '#d1d5db'
              }}
              transition={{ duration: 0.2 }}
            >
              {/* Question Header */}
              <div
                onClick={() => toggleItem(item.id)}
                style={{
                  padding: '24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: 'white'
                }}
              >
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  margin: 0,
                  color: '#1a1a1a',
                  fontFamily: "Axiforma, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  flex: 1,
                  paddingRight: '16px'
                }}>
                  {item.question}
                </h3>
                
                {/* Toggle Icon */}
                <motion.div
                  style={{
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#666'
                  }}
                  animate={{ 
                    rotate: openItem === item.id ? 45 : 0 
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {openItem === item.id ? '×' : '+'}
                </motion.div>
              </div>

              {/* Answer Content */}
              <AnimatePresence>
                {openItem === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{
                      padding: '0 24px 24px 24px',
                      
                    }}>
                      <p style={{
                        fontSize: '16px',
                        lineHeight: 1.6,
                        margin: 0,
                        color: '#1a1a1a',
                        fontFamily: "Axiforma, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                        fontWeight: 400
                      }}>
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}