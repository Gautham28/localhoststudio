"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";


type ContactModalContextValue = {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function useContactModal(): ContactModalContextValue {
  const ctx = useContext(ContactModalContext);
  if (!ctx) {
    throw new Error("useContactModal must be used within ContactModalProvider");
  }
  return ctx;
}

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  const value = useMemo(() => ({ open, openModal, closeModal }), [open, openModal, closeModal]);

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      <ContactModal open={open} onClose={closeModal} />
    </ContactModalContext.Provider>
  );
}

function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  const services = [
    "Web Development",
    "UI/UX Design",
    "Branding",
    "App Development",
  ];

  const toggleService = (label: string) => {
    setSelectedServices((prev) =>
      prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
    );
  };

  // Detect mobile viewport to switch to a simplified, full-screen dark layout
  useEffect(() => {
    const mq = typeof window !== "undefined" ? window.matchMedia("(max-width: 768px)") : null;
    const onChange = () => setIsMobile(!!mq?.matches);
    onChange();
    mq?.addEventListener("change", onChange);
    return () => mq?.removeEventListener("change", onChange);
  }, []);

  if (!open) return null;

  return (
    <div
      aria-modal
      role="dialog"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: 16,
      }}
    >
      {/* Desktop (two-column) vs Mobile (full-screen dark) layouts */}
      {isMobile ? (
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 16,
            overflow: "hidden",
            background: "#0e0e0e",
            color: "#fff",
            border: "1px solid #1a1a1a",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: 16 }}>
            <img src="/assets/logos/logodark2.svg" alt="Localhost Studio" width={140} height={40} />
            <button
              onClick={onClose}
              aria-label="Close"
              type="button"
              style={{
                background: "transparent",
                color: "#fff",
                border: 0,
                fontSize: 26,
                cursor: "pointer",
                outline: "none",
                boxShadow: "none",
                WebkitTapHighlightColor: "transparent",
                appearance: "none"
              }}
            >
              ×
            </button>
          </div>
          <div style={{ padding: 16, overflowY: "auto" }}>
            <h2 style={{ margin: 0, fontSize: 28, lineHeight: 1.25, fontWeight: 700, letterSpacing: -0.2 }}>
              Got ideas? We’ve got the skills. Let’s build something great.
            </h2>
            <p style={{ margin: "10px 0 18px", color: "#bdbdbd", fontSize: 14 }}>
              Tell us more about yourself and what you’re looking to create.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <input placeholder="Your Name" style={inputStyle} />
              <input placeholder="Email Address" type="email" style={inputStyle} />
            </div>
            <div style={{ marginTop: 20 }}>
              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 10 }}>Services Required</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {services.map((label) => {
                  const selected = selectedServices.includes(label);
                  return (
                    <button
                      key={label}
                      type="button"
                      onClick={() => toggleService(label)}
                      style={{
                        padding: "10px 14px",
                        background: selected ? "#c5ff74" : "#141414",
                        color: selected ? "#0e0e0e" : "#cfcfcf",
                        border: selected ? "1px solid #c5ff74" : "1px solid #2a2a2a",
                        borderRadius: 999,
                        cursor: "pointer",
                        fontWeight: 600,
                      }}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>
            <button
              type="button"
              style={{
                marginTop: 24,
                width: "100%",
                height: 54,
                borderRadius: 999,
                border: "1px solid #c5ff74",
                background: "#c5ff74",
                color: "#0e0e0e",
                fontWeight: 700,
                fontSize: 17,
                cursor: "pointer",
              }}
              onClick={onClose}
            >
              Send Message
            </button>
          </div>
        </div>
      ) : (
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            width: "min(1060px, 100%)",
            borderRadius: 24,
            overflow: "hidden",
            background: "#fff",
            boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
            border: "2px solid #111",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "stretch" }}>
            {/* Left column - logo pinned top, info centered */}
            <div style={{ padding: 32, display: "flex", flexDirection: "column", gap: 24 }}>
              <img src="/assets/logos/logodark2.svg" alt="Localhost Studio" width={200} height={54} />
              <div style={{ display: "flex", flexDirection: "column", gap: 28, justifyContent: "center", flex: 1 }}>
                <InfoItem Icon={MessageCircle} title="Chat to us" subtitle="Our friendly team is here to help." detail="localhoststudio@gmail.com" />
                <InfoItem Icon={Phone} title="Call us" subtitle="Reach out to us on our number." detail={"+91 9405061349"} />
              </div>
            </div>

            {/* Right column - dark card form */}
            <div style={{ background: "#0e0e0e", color: "#fff", padding: 32 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", gap: 12 }}>
                <h2 style={{ margin: 0, fontSize: 36, lineHeight: 1.2, fontWeight: 700, letterSpacing: -0.5 }}>
                  Got ideas? We’ve got the skills. Let’s build something great.
                </h2>
                <button
                  onClick={onClose}
                  aria-label="Close"
                  type="button"
                  style={{
                    background: "transparent",
                    color: "#fff",
                    border: 0,
                    fontSize: 22,
                    cursor: "pointer",
                    outline: "none",
                    boxShadow: "none",
                    WebkitTapHighlightColor: "transparent",
                    appearance: "none"
                  }}
                >
                  ×
                </button>
              </div>
              <p style={{ margin: "12px 0 20px", color: "#bdbdbd", fontSize: 14 }}>
                Tell us more about yourself and what you’re looking to create.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <input placeholder="Your Name" style={inputStyle} />
                <input placeholder="Email Address" type="email" style={inputStyle} />
              </div>

              <div style={{ marginTop: 24 }}>
                <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 12 }}>Services Required</div>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {services.map((label) => {
                    const selected = selectedServices.includes(label);
                    return (
                      <button
                        key={label}
                        type="button"
                        onClick={() => toggleService(label)}
                        style={{
                          padding: "10px 16px",
                          background: selected ? "#c5ff74" : "#141414",
                          color: selected ? "#0e0e0e" : "#cfcfcf",
                          border: selected ? "1px solid #c5ff74" : "1px solid #2a2a2a",
                          borderRadius: 999,
                          cursor: "pointer",
                          fontWeight: 600,
                        }}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                type="button"
                style={{
                  marginTop: 28,
                  width: "100%",
                  height: 56,
                  borderRadius: 999,
                  border: "1px solid #c5ff74",
                  background: "#c5ff74",
                  color: "#0e0e0e",
                  fontWeight: 700,
                  fontSize: 18,
                  cursor: "pointer",
                }}
                onClick={onClose}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function InfoItem({ Icon, title, subtitle, detail }: { Icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>; title: string; subtitle: string; detail: string }) {
  return (
    <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
      <div style={{ width: 56, height: 56, borderRadius: 16, background: "#f3f3f6", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #ececf0" }}>
        <Icon size={22} color="#111" strokeWidth={2.5} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6, color: "#333", flex: 1 }}>
        <div style={{ fontWeight: 800, color: "#111", fontSize: 22 }}>{title}</div>
        <div style={{ color: "#6b6b6b", fontSize: 16 }}>{subtitle}</div>
        <div style={{ whiteSpace: "pre-wrap", fontWeight: 700, fontSize: 18 }}>{detail}</div>
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  height: 64,
  borderRadius: 14,
  background: "#3a3a3a",
  color: "#fff",
  border: "1px solid #3f3f3f",
  padding: "0 16px",
  outline: "none",
  fontSize: 18,
};

export default ContactModalProvider;


