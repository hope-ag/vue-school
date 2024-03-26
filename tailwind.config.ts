import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0BD88F',
          light: '#0CD890'
        },
        secondary: '#01F0FD',
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
          '2': '#737B98'
        }
      },
      fontFamily: {
        sans: ['Rubik', ...defaultTheme.fontFamily.sans]
      },
      container: {
        center: true
      }
    }
  }
}
