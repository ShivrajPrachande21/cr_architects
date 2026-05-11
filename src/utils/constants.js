/**
 * Application Constants
 * Central location for all constant values used throughout the app
 */

export const API_ENDPOINTS = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  CONTACTS: '/api/contacts',
  PROJECTS: '/api/projects',
};

export const COUNTRY_CODES = [
  'US (+1)', 'RU (+7)', 'GB (+44)', 'DE (+49)', 'FR (+33)',
  'IT (+39)', 'ES (+34)', 'CA (+1)', 'AU (+61)', 'JP (+81)',
  'CN (+86)', 'IN (+91)', 'BR (+55)', 'MX (+52)', 'AE (+971)'
];

export const COLORS = {
  PRIMARY: '#f5a623',
  DARK_BG: '#1a1a1a',
  DARK_SECONDARY: '#252525',
  LIGHT_TEXT: '#ccc',
  ACCENT_ORANGE: '#ffb347',
};

export const BREAKPOINTS = {
  MOBILE: 640,
  TABLET: 768,
  DESKTOP: 1024,
  WIDE: 1280,
};

export const ROUTES = {
  HOME: '/',
  CONTACTS: '/contacts',
  ABOUT: '/about',
  SERVICES: '/services',
  PORTFOLIO: '/portfolio',
};
