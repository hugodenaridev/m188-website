// Design System for Marina 188
// A professional design system with consistent patterns and components

export const colors = {
  // Primary colors
  primary: {
    main: '#23224c', // Deep indigo (from logo)
    light: '#3c3a77',
    dark: '#161538',
    contrast: '#ffffff'
  },
  
  // Secondary colors
  secondary: {
    main: '#e2984f', // Warm gold accent
    light: '#f4bb7f',
    dark: '#b87a38',
    contrast: '#ffffff'
  },
  
  // UI colors
  ui: {
    background: '#ffffff',
    backgroundAlt: '#f7f8fc',
    surfaceLight: '#f0f1f9',
    surface: '#ffffff',
    border: '#e0e1ea',
    divider: '#eaebf3'
  },
  
  // Text colors
  text: {
    primary: '#1e1e2f',
    secondary: '#5a5b70',
    tertiary: '#7f8095',
    disabled: '#9fa0ad',
    inverse: '#ffffff'
  },
  
  // Feedback colors
  feedback: {
    success: '#35a56f',
    warning: '#f5b83d',
    error: '#e54d52',
    info: '#4c7bd9'
  },
  
  // Ocean theme colors
  ocean: {
    light: '#b5d8f0',
    medium: '#67a0c9',
    deep: '#345f8c',
    sunset: '#f97055'
  }
};

// Typography
export const typography = {
  fontFamily: {
    primary: "'Montserrat', sans-serif",
    secondary: "'Playfair Display', serif",
    accent: "'Cormorant Garamond', serif"
  },
  
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700
  },
  
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    md: '1.125rem',   // 18px
    lg: '1.25rem',    // 20px
    xl: '1.5rem',     // 24px
    '2xl': '1.875rem', // 30px
    '3xl': '2.25rem',  // 36px
    '4xl': '3rem',     // 48px
    '5xl': '3.75rem'   // 60px
  },
  
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75
  }
};

// Spacing system
export const spacing = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.5rem',    // 24px
  6: '2rem',      // 32px
  7: '2.5rem',    // 40px
  8: '3rem',      // 48px
  9: '4rem',      // 64px
  10: '5rem',     // 80px
  11: '6rem',     // 96px
  12: '8rem'      // 128px
};

// Shadows
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  none: 'none'
};

// Border radius
export const borderRadius = {
  none: '0',
  sm: '0.125rem',  // 2px
  md: '0.25rem',   // 4px
  lg: '0.5rem',    // 8px
  xl: '0.75rem',   // 12px
  '2xl': '1rem',   // 16px
  '3xl': '1.5rem', // 24px
  full: '9999px'
};

// Transitions
export const transitions = {
  default: 'all 0.3s ease',
  fast: 'all 0.15s ease',
  slow: 'all 0.5s ease'
};

// Z-index scale
export const zIndex = {
  hide: -1,
  base: 0,
  raised: 1,
  dropdown: 10,
  sticky: 100,
  overlay: 200,
  modal: 300,
  popover: 400,
  toast: 500,
  tooltip: 600
};

// Breakpoints for responsive design
export const breakpoints = {
  xs: '0px',
  sm: '600px',
  md: '900px',
  lg: '1200px',
  xl: '1536px'
};

// Container max widths
export const containers = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};

// Export combined design system
const designSystem = {
  colors,
  typography,
  spacing,
  shadows,
  borderRadius,
  transitions,
  zIndex,
  breakpoints,
  containers
};

export default designSystem; 