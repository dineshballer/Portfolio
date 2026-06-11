import { useState, useEffect } from "react";

/**
 * LiquidGlassScrollSpy
 * --------------------------------------------------------------
 * A side-nav scroll spy with the same Apple-style liquid glass
 * material as the navbar: heavy backdrop blur + saturation,
 * layered inner highlights, soft outer shadow stack.
 *
 * Active item: glass pill background + subtle green accent bar
 * (the bar tells the user "you are HERE in the document").
 *
 * Drop into Framer as a Code Component (File → New → Code Component).
 * The right-hand panel will expose every prop below.
 *
 * The component handles smooth-scroll-on-click out of the box.
 * For automatic scroll-spy (highlight on scroll), pair it with a
 * Framer marketplace scroll-spy code component, or wire each section's
 * "in viewport" event to set the activeId prop.
 */

export default function LiquidGlassScrollSpy({
  eyebrow = "On this page",
  sections = [
    { id: "overview",     label: "Overview" },
    { id: "problem-area", label: "Problem area" },
    { id: "design-goals", label: "Design goals" },
    { id: "solution",     label: "Solution" },
    { id: "dashboard",    label: "Dashboard view" },
    { id: "case-detail",  label: "Case detail" },
    { id: "validation",   label: "Validation" },
    { id: "post-launch",  label: "Post-launch" },
  ],
  defaultActiveId = "problem-area",
  // Visual tokens — tweakable from Framer's panel
  blur = 28,
  saturate = 200,
  glassTint = "rgba(255, 255, 255, 0.42)",
  borderTint = "rgba(255, 255, 255, 0.45)",
  inkColor = "rgba(20, 20, 30, 0.96)",
  inkSoft = "rgba(20, 20, 30, 0.62)",
  inkMute = "rgba(20, 20, 30, 0.52)",
  accent = "#28a868",
  width = 232,
}) {
  const [activeId, setActiveId] = useState(defaultActiveId);

  const filterValue = `blur(${blur}px) saturate(${saturate}%)`;

  const handleClick = (e, id) => {
    setActiveId(id);
    // Native smooth scroll to the section
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside
      aria-label={eyebrow}
      style={{
        ...styles.spy,
        width,
        background: glassTint,
        backdropFilter: filterValue,
        WebkitBackdropFilter: filterValue,
        border: `1px solid ${borderTint}`,
      }}
    >
      <div style={{ ...styles.eyebrow, color: inkMute }}>{eyebrow}</div>

      <nav style={styles.list}>
        {sections.map((s) => {
          const isActive = s.id === activeId;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => handleClick(e, s.id)}
              style={{
                ...styles.item,
                color: isActive ? inkColor : inkSoft,
                background: isActive ? "rgba(255,255,255,0.55)" : "transparent",
                boxShadow: isActive
                  ? "inset 0 0.5px 0 rgba(255,255,255,0.7), 0 1px 2px rgba(0,0,0,0.04)"
                  : "none",
              }}
              onMouseEnter={(e) => {
                if (isActive) return;
                e.currentTarget.style.color = inkColor;
                e.currentTarget.style.background = "rgba(255,255,255,0.28)";
              }}
              onMouseLeave={(e) => {
                if (isActive) return;
                e.currentTarget.style.color = inkSoft;
                e.currentTarget.style.background = "transparent";
              }}
            >
              {/* Accent bar on active item */}
              {isActive && (
                <span
                  aria-hidden
                  style={{
                    position: "absolute",
                    left: 4,
                    top: 9,
                    width: 2,
                    height: 18,
                    background: accent,
                    borderRadius: "0 2px 2px 0",
                    boxShadow: `0 0 6px ${accent}59`,
                  }}
                />
              )}
              {s.label}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}

/* ---------------- styles ---------------- */
const styles = {
  spy: {
    padding: "14px 12px 16px",
    borderRadius: 18,
    boxShadow: [
      "inset 0 1px 1px rgba(255,255,255,0.65)",
      "inset 0 -1px 1px rgba(0,0,0,0.04)",
      "0 1px 2px rgba(0,0,0,0.04)",
      "0 8px 24px rgba(0,0,0,0.06)",
      "0 18px 48px rgba(0,0,0,0.04)",
    ].join(", "),
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", sans-serif',
  },
  eyebrow: {
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    padding: "6px 12px 10px",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
  },
  item: {
    position: "relative",
    display: "block",
    padding: "8px 14px",
    fontSize: 13.5,
    fontWeight: 500,
    textDecoration: "none",
    borderRadius: 10,
    transition: "color 0.15s ease, background 0.2s ease",
  },
};
