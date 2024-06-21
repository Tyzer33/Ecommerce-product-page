import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        main: 'hsla(var(--background))',
        accent: 'hsla(var(--accent))',
      },
      textColor: {
        body: 'hsla(var(--txt-body))',
        heading: 'hsla(var(--txt-heading))',
      },
      fill: {
        base: 'hsla(var(--fill-base))',
        active: 'hsla(var(--fill-active))',
      },
      fontFamily: {
        'kumbh-sans': ['"Kumbh Sans"', 'sans-serif'],
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [],
} satisfies Config
