import { ThemeBuildConfig } from '@dreipol/t3-react-theme'

export const theme:ThemeBuildConfig = {
  colors: {

    // text: {
    //   primary: '#d3cbcb',
    //   secondary:'#b4b4b4',
    //   contrast:'#333333',
    //   disabled:'#7e7e7e'
    // },
    palettes: {
      // neutral: {
      //   dark: 'rgba(214,214,214,0.2)',
      //   main: 'rgba(235,235,235,0.2)',
      //   light: 'rgba(240,240,240,0.2)',
      //   veryLight: 'rgba(245,245,245,0.4)',
      //   superLight: 'rgba(247,247,247,0.4)',
      //   contrast: '#000000'
      // },


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
      size: '86px'
    },
    heading2: {
      size: '48px'
    }
  }
}
