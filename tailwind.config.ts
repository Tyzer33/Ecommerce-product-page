import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        main: 'hsla(var(--background))',
        accent: 'hsla(var(--accent))',
        alt: 'hsla(var(--bg-alt))',
        badge: 'hsla(var(--bg-badge))',
        thumbnail: {
          hover: 'hsla(var(--thumbnail-hover))',
          active: 'hsla(var(--thumbnail-active))',
        },
        'button-hover': 'hsla(var(--button-hover))',
      },
      textColor: {
        body: 'hsla(var(--txt-body))',
        heading: 'hsla(var(--txt-heading))',
        badge: 'hsla(var(--txt-badge))',
      },
      fill: {
        base: 'hsla(var(--fill-base))',
        idle: 'hsla(var(--fill-idle))',
        active: 'hsla(var(--fill-active))',
      },
      fontFamily: {
        'Kumbh-sans': ['"Kumbh Sans"', 'sans-serif'],
      },
      outlineColor: {
        accent: 'hsla(var(--accent))',
      },
      ringColor: {
        accent: 'hsla(var(--accent))',
      },
      margin: {
        desktop: '4rem',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        main: 'hsla(var(--border))',
      },
      screens: {
        'cart-md': '500px',
      },
    },
  },
  plugins: [],
} satisfies Config
