// Unified Tailwind theme for the Sky Quantech AI site.
// Merged from the approved Stitch exports; the brand palette below is authoritative.
// Edit here only — build.mjs injects this into every page.
export const extend = {
  "boxShadow": {
    "subtle-card": "0 1px 3px 0 rgba(0,16,96,0.04), 0 1px 2px -1px rgba(0,16,96,0.04)",
    "elevated-card": "0 4px 12px -2px rgba(0,16,96,0.08), 0 2px 6px -2px rgba(0,32,160,0.06)",
    "accent-blue": "0 4px 14px 0 rgba(0,80,240,0.25)"
  },
  "colors": {
    "accent-blue": "#0050F0",
    "ice-blue": "#F5F8FF",
    "brand-textSecondary": "#2D486A",
    "brand-textMuted": "#60728F",
    "brand-deep": "#001060",
    "brand-dark": "#001070",
    "brand-primary": "#0020A0",
    "brand-electric": "#0050F0",
    "brand-bright": "#0060F0",
    "brand-highlight": "#0078FF",
    "brand-light": "#F5F8FF",
    "brand-text": "#2D486A",
    "brand-border": "#D8E3FB",
    "background": "#FFFFFF",
    "border-strong": "#B6C7E8",
    "border-subtle": "#D8E3FB",
    "bright-blue": "#0060F0",
    "dark-blue": "#001070",
    "deep-blue": "#001060",
    "electric-blue": "#0050F0",
    "error": "#ba1a1a",
    "error-container": "#ffdad6",
    "highlight-blue": "#0078FF",
    "inverse-on-surface": "#ecf1ff",
    "inverse-primary": "#b6c7e8",
    "inverse-surface": "#263143",
    "on-background": "#111c2d",
    "on-error": "#ffffff",
    "on-error-container": "#93000a",
    "on-primary": "#FFFFFF",
    "on-primary-container": "#7484a3",
    "on-primary-fixed": "#091c35",
    "on-primary-fixed-variant": "#374762",
    "on-secondary": "#ffffff",
    "on-secondary-container": "#435d80",
    "on-secondary-fixed": "#001c38",
    "on-secondary-fixed-variant": "#2d486a",
    "on-surface": "#001060",
    "on-surface-variant": "#2D486A",
    "on-tertiary": "#ffffff",
    "on-tertiary-container": "#0090ad",
    "on-tertiary-fixed": "#001f27",
    "on-tertiary-fixed-variant": "#004e5f",
    "outline": "#75777e",
    "outline-variant": "#D8E3FB",
    "primary": "#001060",
    "primary-blue": "#0020A0",
    "primary-container": "#0020A0",
    "primary-fixed": "#d5e3ff",
    "primary-fixed-dim": "#b6c7e8",
    "secondary": "#2D486A",
    "secondary-container": "#bbd6ff",
    "secondary-fixed": "#d3e4ff",
    "secondary-fixed-dim": "#aec8f0",
    "surface": "#FFFFFF",
    "surface-base": "#FFFFFF",
    "surface-bright": "#f9f9ff",
    "surface-container": "#EEF3FF",
    "surface-container-high": "#E2ECFD",
    "surface-container-highest": "#d8e3fb",
    "surface-container-low": "#F5F8FF",
    "surface-container-lowest": "#FFFFFF",
    "surface-dim": "#cfdaf2",
    "surface-slate": "#F5F8FF",
    "surface-tint": "#4e5f7b",
    "surface-variant": "#d8e3fb",
    "tertiary": "#000000",
    "tertiary-container": "#001f27",
    "tertiary-fixed": "#b3ebff",
    "tertiary-fixed-dim": "#5dd5f8",
    "text-muted": "#60728F",
    "text-primary": "#001060",
    "text-secondary": "#2D486A"
  },
  "borderRadius": {
    "DEFAULT": "0.25rem",
    "full": "0.75rem",
    "lg": "0.375rem",
    "xl": "0.5rem"
  },
  "spacing": {
    "gutter-desktop": "1.5rem",
    "gutter-mobile": "1rem",
    "margin-desktop": "3rem",
    "margin-mobile": "1.25rem",
    "space-2xl": "3rem",
    "space-2xs": "0.25rem",
    "space-3xl": "4.5rem",
    "space-4xl": "6rem",
    "space-lg": "1.5rem",
    "space-md": "1rem",
    "space-sm": "0.75rem",
    "space-xl": "2rem",
    "space-xs": "0.5rem"
  },
  "fontFamily": {
    "body-lg": [
      "Inter",
      "sans-serif"
    ],
    "body-md": [
      "Inter",
      "sans-serif"
    ],
    "body-sm": [
      "Inter",
      "sans-serif"
    ],
    "display-xl": [
      "Plus Jakarta Sans",
      "sans-serif"
    ],
    "display-xl-mobile": [
      "Plus Jakarta Sans",
      "sans-serif"
    ],
    "eyebrow-tracking": [
      "Inter",
      "sans-serif"
    ],
    "headline-lg": [
      "Plus Jakarta Sans",
      "sans-serif"
    ],
    "headline-lg-mobile": [
      "Plus Jakarta Sans",
      "sans-serif"
    ],
    "headline-md": [
      "Plus Jakarta Sans",
      "sans-serif"
    ],
    "headline-sm": [
      "Plus Jakarta Sans",
      "sans-serif"
    ],
    "label-md": [
      "Inter",
      "sans-serif"
    ],
    "tabular-numerical": [
      "Inter",
      "sans-serif"
    ],
    "title-lg": [
      "Plus Jakarta Sans",
      "sans-serif"
    ],
    "title-md": [
      "Plus Jakarta Sans",
      "sans-serif"
    ]
  },
  "fontSize": {
    "body-lg": [
      "16px",
      {
        "lineHeight": "26px",
        "letterSpacing": "-0.005em",
        "fontWeight": "400"
      }
    ],
    "body-md": [
      "14px",
      {
        "lineHeight": "22px",
        "letterSpacing": "0em",
        "fontWeight": "400"
      }
    ],
    "body-sm": [
      "12px",
      {
        "lineHeight": "18px",
        "letterSpacing": "0.005em",
        "fontWeight": "400"
      }
    ],
    "display-xl": [
      "54px",
      {
        "lineHeight": "62px",
        "letterSpacing": "-0.025em",
        "fontWeight": "700"
      }
    ],
    "display-xl-mobile": [
      "36px",
      {
        "lineHeight": "44px",
        "letterSpacing": "-0.02em",
        "fontWeight": "700"
      }
    ],
    "eyebrow-tracking": [
      "11px",
      {
        "lineHeight": "16px",
        "letterSpacing": "0.12em",
        "fontWeight": "600"
      }
    ],
    "headline-lg": [
      "40px",
      {
        "lineHeight": "48px",
        "letterSpacing": "-0.02em",
        "fontWeight": "700"
      }
    ],
    "headline-lg-mobile": [
      "28px",
      {
        "lineHeight": "36px",
        "letterSpacing": "-0.015em",
        "fontWeight": "600"
      }
    ],
    "headline-md": [
      "28px",
      {
        "lineHeight": "36px",
        "letterSpacing": "-0.015em",
        "fontWeight": "600"
      }
    ],
    "headline-sm": [
      "20px",
      {
        "lineHeight": "28px",
        "letterSpacing": "-0.01em",
        "fontWeight": "600"
      }
    ],
    "label-md": [
      "13px",
      {
        "lineHeight": "18px",
        "letterSpacing": "0.01em",
        "fontWeight": "500"
      }
    ],
    "tabular-numerical": [
      "14px",
      {
        "lineHeight": "20px",
        "letterSpacing": "0.02em",
        "fontWeight": "500"
      }
    ],
    "title-lg": [
      "18px",
      {
        "lineHeight": "26px",
        "letterSpacing": "-0.005em",
        "fontWeight": "600"
      }
    ],
    "title-md": [
      "16px",
      {
        "lineHeight": "24px",
        "letterSpacing": "0em",
        "fontWeight": "600"
      }
    ]
  }
};
