/**
 * Design System Tokens
 * Terminal-native theme with monospace typography and systemctl.sh inspired palette
 */

// Color Palette - Terminal-inspired dark theme
export const colors = {
  // Neutral/Greys
  neutral: {
    0: '#000000',
    50: '#0a0a0a',
    100: '#1a1a1a',
    200: '#2d2d2d',
    300: '#404040',
    400: '#535353',
    500: '#666666',
    600: '#808080',
    700: '#999999',
    800: '#b3b3b3',
    900: '#e0e0e0',
    950: '#f5f5f5',
  },

  // Primary - Terminal green/cyan
  primary: {
    50: '#e6f7f5',
    100: '#b3e5db',
    200: '#80d4c1',
    300: '#4dc2a7',
    400: '#2ab59a', // Main primary
    500: '#229988',
    600: '#1a7d76',
    700: '#126164',
    800: '#0a4552',
    900: '#023940',
  },

  // Secondary - Terminal blue
  secondary: {
    50: '#e6f2ff',
    100: '#b3d9ff',
    200: '#80c0ff',
    300: '#4da7ff',
    400: '#1a8eff', // Main secondary
    500: '#0078e6',
    600: '#0062cc',
    700: '#004db3',
    800: '#003799',
    900: '#002280',
  },

  // Accent - Terminal yellow/orange
  accent: {
    50: '#fff9e6',
    100: '#ffecb3',
    200: '#ffe080',
    300: '#ffd54d',
    400: '#ffca1a', // Main accent
    500: '#ffa500',
    600: '#ff9100',
    700: '#ff7d00',
    800: '#ff6900',
    900: '#ff5500',
  },

  // Semantic colors
  success: {
    light: '#e6f7f5',
    main: '#2ab59a',
    dark: '#126164',
  },
  error: {
    light: '#ffe6e6',
    main: '#d32f2f',
    dark: '#b71c1c',
  },
  warning: {
    light: '#fff9e6',
    main: '#ffca1a',
    dark: '#ff7d00',
  },
  info: {
    light: '#e6f2ff',
    main: '#1a8eff',
    dark: '#004db3',
  },

  // Status
  status: {
    active: '#2ab59a',
    inactive: '#535353',
    pending: '#ffca1a',
    error: '#d32f2f',
  },
};

// Typography - Monospace focus
export const typography = {
  // Font families
  fontFamily: {
    monospace: '"JetBrains Mono", "IBM Plex Mono", "Courier New", monospace',
    mono: '"Fira Code", "Source Code Pro", monospace',
    fallback: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
  },

  // Font weights
  fontWeight: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  // Font sizes (rem based)
  fontSize: {
    xs: '0.625rem', // 10px
    sm: '0.75rem', // 12px
    base: '0.875rem', // 14px
    lg: '1rem', // 16px
    xl: '1.125rem', // 18px
    '2xl': '1.25rem', // 20px
    '3xl': '1.5rem', // 24px
    '4xl': '1.875rem', // 30px
  },

  // Line heights
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },

  // Letter spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
};

// Spacing Scale (8px base)
export const spacing = {
  0: '0',
  1: '0.25rem', // 4px
  2: '0.5rem', // 8px
  3: '0.75rem', // 12px
  4: '1rem', // 16px
  5: '1.25rem', // 20px
  6: '1.5rem', // 24px
  7: '1.75rem', // 28px
  8: '2rem', // 32px
  9: '2.25rem', // 36px
  10: '2.5rem', // 40px
  12: '3rem', // 48px
  14: '3.5rem', // 56px
  16: '4rem', // 64px
  20: '5rem', // 80px
  24: '6rem', // 96px
  28: '7rem', // 112px
  32: '8rem', // 128px
  36: '9rem', // 144px
  40: '10rem', // 160px
};

// Border Radius
export const borderRadius = {
  none: '0',
  xs: '2px',
  sm: '4px',
  base: '6px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '20px',
  '3xl': '24px',
  full: '9999px',
};

// Border Width
export const borderWidth = {
  0: '0',
  1: '1px',
  2: '2px',
  4: '4px',
  8: '8px',
};

// Shadow/Elevation - Minimal for terminal aesthetic
export const shadow = {
  none: 'none',
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  base: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  md: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  lg: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  xl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
};

// Transitions/Animations
export const transition = {
  fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  base: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  slower: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
};

// Breakpoints - Responsive design
export const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Z-index scale
export const zIndex = {
  hide: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modal: 1040,
  popover: 1050,
  tooltip: 1060,
};

// Complete theme object
export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  borderWidth,
  shadow,
  transition,
  breakpoints,
  zIndex,
};

export type Theme = typeof theme;
export default theme;
