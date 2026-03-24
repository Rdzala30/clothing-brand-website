/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0e0e0e',
        surface: '#0e0e0e',
        'surface-container': '#191a1a',
        'surface-container-high': '#1f2020',
        'surface-container-highest': '#252626',
        'surface-container-low': '#131313',
        'surface-container-lowest': '#000000',
        'surface-bright': '#2c2c2c',
        'surface-dim': '#0e0e0e',
        primary: '#c6c6c8',
        'primary-container': '#454749',
        secondary: '#b69973',
        'secondary-container': '#4c381a',
        'on-background': '#e7e5e4',
        'on-surface': '#e7e5e4',
        'on-surface-variant': '#acabaa',
        'on-primary': '#3e4042',
        'on-secondary': '#2d1d03',
        outline: '#767575',
        'outline-variant': '#484848',
        tertiary: '#faf9fe',
      },
      fontFamily: {
        serif: ['"Noto Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0px',
        none: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        full: '0px',
      },
      letterSpacing: {
        widest: '0.15em',
        'ultra-wide': '0.25em',
      },
    },
  },
  plugins: [],
}
