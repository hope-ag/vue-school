import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0BD88F',
          light: '#0CD890'
        },
        secondary: {
          DEFAULT: '#01F0FD',
          light: '#00F0FF'
        },
        surface: {
          DEFAULT: '#212435',
          light: '#2B2F44'
        },
        tertiary: {
          violet: '#4F08E6',
          orange: '#FF4975'
        },
        gray: {
          DEFAULT: '#F3F5FF',
          '1': '#797B88',
          '2': '#737B98',
          '3': '#212435'
        }
      },
      fontFamily: {
        sans: ['Rubik', ...defaultTheme.fontFamily.sans],
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
        'circular-sans': ['"Circular Std"', ...defaultTheme.fontFamily.sans]
      },
      container: {
        center: true
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities, addBase, theme }) {
      addUtilities({
        '.gradient-text': {
          background: `linear-gradient(90deg, ${theme('colors.primary.DEFAULT')} 0%, ${theme('colors.secondary.light')} 100%)`,
          backgroundClip: 'text',
          color: 'transparent',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }
      })
      addBase({
        html: {
          background: theme('colors.surface.DEFAULT')
        }
      })
    })
  ]
}
