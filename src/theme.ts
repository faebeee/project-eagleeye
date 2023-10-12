import { ThemeBuildConfig } from '@dreipol/t3-react-theme'

export const theme:ThemeBuildConfig = {
  colors: {
    palettes: {
      primary: {
        main: '#262626',
        dark: '#0D0D0D',
        light: '#404040',
        veryLight: '#E6E6E6',
        superLight: '#F5F5F5',
        contrast: '#FFFFFF'
      },
      secondary: {
        main: '#1D8C73',
        dark: '#14614F',
        light: '#25B795',
        veryLight: '#CCF5EB',
        superLight: '#EEFBF8',
        contrast: '#FFFFFF'
      }
    }
  },
  font: {
    heading1: {
      family: 'Blanka',
      size: '86px'
    },
    heading2: {
      size: '36px'
    },
    value: {
      size: '32px'
    },
    listTitle: {
      size: '24px'
    }
  }
}
