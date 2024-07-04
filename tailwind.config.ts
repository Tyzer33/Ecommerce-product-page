import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import { CSSRuleObject } from 'tailwindcss/types/config'

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
        'accent-hover': 'hsla(var(--accent-hover))',
        active: 'hsla(var(--svg-active))',
        alt: 'hsla(var(--svg-alt))',
      },
      stroke: {
        accent: 'hsla(var(--accent))',
        'accent-hover': 'hsla(var(--accent-hover))',
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
      expandClickArea: {
        xs: '0.125rem',
        sm: '0.25rem',
        md: '0.5rem',
        lg: '1rem',
        xl: '1.5rem',
      },
    },
  },

  plugins: [
    plugin(({ matchUtilities, theme }) => {
      const newUtilities: Parameters<typeof matchUtilities>[0] = {
        'expand-click': (value) => {
          return {
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              zIndex: '5',
              top: `-${value}`,
              right: `-${value}`,
              bottom: `-${value}`,
              left: `-${value}`,
            },
          }
        },
      }

      const properties = {
        t: ['marginTop'],
        b: ['marginBottom'],
        l: ['marginLeft'],
        r: ['marginRight'],
        x: ['marginLeft', 'marginRight'],
        y: ['marginTop', 'marginBottom'],
      }

      Object.entries(properties).forEach(([name, property]) => {
        newUtilities[`expand-click-${name}`] = (value) => {
          const before: CSSRuleObject = {
            content: '""',
            position: 'absolute',
            inset: '0',
            zIndex: '5',
          }

          property.forEach((prop) => {
            before[prop] = `-${value}`
          })

          return { position: 'relative', '&::before': before }
        }
      })

      matchUtilities(newUtilities, {
        values: theme('expandClickArea'),
        type: ['length', 'percentage'],
      })
    }),
  ],
} satisfies Config
