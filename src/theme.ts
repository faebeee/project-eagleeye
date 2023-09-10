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
        main: '#2B86A1',
        dark: '#206479',
        light: '#35A7CA',
        veryLight: '#CFEAF2',
        superLight: '#EFF8FB',
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
