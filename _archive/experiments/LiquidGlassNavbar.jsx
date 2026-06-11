import { useState } from "react";

/**
 * LiquidGlassNavbar
 * --------------------------------------------------------------
 * Apple-style "liquid glass" floating pill nav.
 * Heavy backdrop blur + saturation, layered inner highlights, soft
 * outer shadows. Picks up colors from the page behind it.
 *
 * In Framer, drop in as a Code Component (File → New → Code Component)
 * and override props from the right panel.
 *
 * Tip: this component looks washed out on a flat white background.
 * Place it over imagery, gradients, or colored sections to see it shine.
 */

export default function LiquidGlassNavbar({
  logo = "D",
  email = "dineshballer@gmail.com",
  links = [
    { label: "Work", href: "#work", active: true },
    { label: "About", href: "#about" },
    { label: "LinkedIn", href: "https://linkedin.com", external: true },
    { label: "Resume", href: "/resume.pdf" },
  ],
  ctaLabel = "Copy email",
  // Visual tokens — tweakable from Framer's panel
  blur = 28,
  saturate = 200,
  glassTint = "rgba(255, 255, 255, 0.42)",
  borderTint = "rgba(255, 255, 255, 0.45)",
  inkColor = "rgba(20, 20, 30, 0.95)",
  inkSoft = "rgba(20, 20, 30, 0.72)",
  logoBg = "rgba(15, 31, 61, 0.9)",
  accent = "#28a868",
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

  const filterValue = `blur(${blur}px) saturate(${saturate}%)`;

  return (
    <div style={styles.wrap}>
      <nav
        aria-label="Primary"
        style={{
          ...styles.bar,
          background: glassTint,
          backdropFilter: filterValue,
          WebkitBackdropFilter: filterValue,
          border: `1px solid ${borderTint}`,
        }}
      >
        {/* Logo */}
        <a
          href="#"
          aria-label="Home"
          style={{ ...styles.logo, background: logoBg }}
        >
          {logo}
        </a>

        {/* Links */}
        <div style={styles.links}>
          {links.map((l) => {
            const isActive = !!l.active;
            return (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                style={{
                  ...styles.link,
                  color: isActive ? inkColor : inkSoft,
                  background: isActive ? "rgba(255,255,255,0.55)" : "transparent",
                  boxShadow: isActive
                    ? "inset 0 0.5px 0 rgba(255,255,255,0.6), 0 1px 2px rgba(0,0,0,0.04)"
                    : "none",
                }}
                onMouseEnter={(e) => {
                  if (isActive) return;
                  e.currentTarget.style.color = inkColor;
                  e.currentTarget.style.background = "rgba(255,255,255,0.35)";
                }}
                onMouseLeave={(e) => {
                  if (isActive) return;
                  e.currentTarget.style.color = inkSoft;
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {l.label}
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <button
          onClick={handleCopy}
          aria-label="Copy email"
          style={{ ...styles.cta, color: inkColor }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.7)";
            e.currentTarget.style.transform = "translateY(-0.5px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.55)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <span
            aria-hidden
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: accent,
              boxShadow: `0 0 0 2.5px ${accent}38`,
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
    top: 18,
    zIndex: 50,
    padding: "0 16px",
    display: "flex",
    justifyContent: "center",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", sans-serif',
  },
  bar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 760,
    padding: "9px 12px 9px 16px",
    borderRadius: 999,
    boxShadow: [
      "inset 0 1px 1px rgba(255,255,255,0.65)",
      "inset 0 -1px 1px rgba(0,0,0,0.04)",
      "0 1px 2px rgba(0,0,0,0.04)",
      "0 8px 24px rgba(0,0,0,0.06)",
      "0 18px 48px rgba(0,0,0,0.04)",
    ].join(", "),
  },
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 32,
    borderRadius: "50%",
    color: "#fff",
    fontWeight: 600,
    fontSize: 13,
    letterSpacing: "-0.02em",
    textDecoration: "none",
    transition: "transform 0.18s ease",
  },
  links: { display: "flex", alignItems: "center", gap: 2 },
  link: {
    padding: "7px 13px",
    fontSize: 13.5,
    fontWeight: 500,
    textDecoration: "none",
    borderRadius: 999,
    transition: "color 0.15s ease, background 0.2s ease",
  },
  cta: {
    display: "inline-flex",
    alignItems: "center",
    gap: 7,
    padding: "7px 14px",
    fontFamily: "inherit",
    fontSize: 12.5,
    fontWeight: 600,
    background: "rgba(255,255,255,0.55)",
    border: "1px solid rgba(255,255,255,0.6)",
    boxShadow:
      "inset 0 1px 0.5px rgba(255,255,255,0.7), 0 1px 2px rgba(0,0,0,0.05)",
    borderRadius: 999,
    cursor: "pointer",
    transition: "background 0.2s ease, transform 0.15s ease",
  },
};
