import type { Config } from 'tailwindcss'

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
          DEFAULT: '#2B2F44',
          dark: '#212435'
        }
      }
    }
  }
}
