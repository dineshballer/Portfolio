import { useState } from "react";

/**
 * Navbar
 * --------------------------------------------------------------
 * A floating, frosted-glass nav for a portfolio.
 * - Designed so every value (color, radius, padding) is a prop or
 *   token, making it easy to tweak in Framer's code-component panel.
 * - Drop into Framer as a Code Component (File → New → Code Component)
 *   and override props from the right-hand panel.
 */

export default function Navbar({
  logo = "D",
  email = "dineshballer@gmail.com",
  links = [
    { label: "Work", href: "#work", active: true },
    { label: "About", href: "#about" },
    { label: "LinkedIn", href: "https://linkedin.com", external: true },
    { label: "Resume", href: "/resume.pdf" },
  ],
  ctaLabel = "Copy email",
  // Visual tokens — change these in Framer's panel
  ink = "#0F1F3D",
  inkSoft = "#475569",
  accent = "#5DCAA5",
  navBg = "rgba(255,255,255,0.72)",
}) {
  const [copyText, setCopyText] = useState(ctaLabel);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyText("Copied");
      setTimeout(() => setCopyText(ctaLabel), 1400);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div style={styles.wrap}>
      <nav
        aria-label="Primary"
        style={{
          ...styles.bar,
          background: navBg,
          backdropFilter: "saturate(180%) blur(14px)",
          WebkitBackdropFilter: "saturate(180%) blur(14px)",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          aria-label="Home"
          style={{ ...styles.logo, background: ink }}
        >
          {logo}
        </a>

        {/* Links */}
        <div style={styles.links}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              style={{
                ...styles.link,
                color: l.active ? ink : inkSoft,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = ink;
                e.currentTarget.style.background = "rgba(15,31,61,0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = l.active ? ink : inkSoft;
                e.currentTarget.style.background = "transparent";
              }}
            >
              {l.label}
              {l.active && (
                <span
                  style={{ ...styles.activeBar, background: ink }}
                />
              )}
            </a>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={handleCopy}
          aria-label="Copy email"
          style={{ ...styles.cta, background: ink }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-1px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        >
          <span
            aria-hidden
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: accent,
              boxShadow: `0 0 0 3px ${accent}40`,
            }}
          />
          <span>{copyText}</span>
        </button>
      </nav>
    </div>
  );
}

/* ---------------- styles ---------------- */
const styles = {
  wrap: {
    position: "sticky",
    top: 16,
    zIndex: 50,
    padding: "0 20px",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", sans-serif',
  },
  bar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: 1100,
    margin: "0 auto",
    padding: "10px 14px 10px 18px",
    border: "0.5px solid rgba(0,0,0,0.06)",
    borderRadius: 999,
    boxShadow:
      "0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.04)",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 36,
    height: 36,
    borderRadius: "50%",
    color: "#fff",
    fontWeight: 500,
    fontSize: 15,
    letterSpacing: "-0.02em",
    textDecoration: "none",
    transition: "transform 0.18s ease",
  },
  links: { display: "flex", alignItems: "center", gap: 2 },
  link: {
    position: "relative",
    padding: "8px 14px",
    fontSize: 14,
    fontWeight: 500,
    textDecoration: "none",
    borderRadius: 8,
    transition: "color 0.15s ease, background 0.15s ease",
  },
  activeBar: {
    position: "absolute",
    left: 14,
    right: 14,
    bottom: 2,
    height: 1.5,
    borderRadius: 2,
  },
  cta: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "9px 16px",
    color: "#fff",
    fontFamily: "inherit",
    fontSize: 13,
    fontWeight: 500,
    border: "none",
    borderRadius: 999,
    cursor: "pointer",
    transition: "transform 0.15s ease, background 0.15s ease",
  },
};
