import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bone: '#FAFAF7',
        ivory: '#F5F4EE',
        ash: '#E8E6DD',
        ink: '#0A0A08',
        graphite: '#1A1A17',
        smoke: '#6E6B61',
        forest: {
          DEFAULT: '#1B4332',
          light: '#2D6A4F',
          deep: '#0D2818',
        },
        moss: '#52796F',
        ochre: '#C9A961',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        display: ['var(--font-instrument)', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 11vw, 11rem)', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        'display-lg': ['clamp(2.75rem, 7vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'display-md': ['clamp(2.25rem, 5vw, 4.5rem)', { lineHeight: '1', letterSpacing: '-0.03em' }],
        'display-sm': ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'apple-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up': 'slideUp 1s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
