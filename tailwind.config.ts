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
        'accent-hover': 'hsla(var(--accent-hover))',
        lightbox: 'hsla(var(--bg-lightbox))',
      },
      textColor: {
        body: 'hsla(var(--txt-body))',
        heading: 'hsla(var(--txt-heading))',
        badge: 'hsla(var(--txt-badge))',
      },
      fill: {
        accent: 'hsla(var(--accent))',
        'accent-hover': 'hsla(var(--svg-accent-hover))',
        active: 'hsla(var(--svg-active))',
        alt: 'hsla(var(--svg-alt))',
      },
      stroke: {
        accent: 'hsla(var(--accent))',
        'accent-hover': 'hsla(var(--svg-accent-hover))',
        active: 'hsla(var(--svg-active))',
        alt: 'hsla(var(--svg-alt))',
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
