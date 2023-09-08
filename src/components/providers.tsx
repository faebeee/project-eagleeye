import { GridProvider } from '@dreipol/t3-react-grid'
import { PropsWithChildren } from 'react'
import { ThemeProvider } from '@dreipol/t3-react-theme'

export function Providers({children}: PropsWithChildren<{}>) {
  return (
    <ThemeProvider theme={{
      colors: {
        palettes: {
          primary: {
            contrast: '#FFFFFF',
            dark: '#0D0D0D',
            light: '#404040',
            main: '#262626',
            superLight: '#F5F5F5',
            veryLight: '#E6E6E6'
          }
        }
      },
      font: {
        heading2: {
          size: '48px'
        }
      }
    }}>
      <GridProvider config={{bezelGap: 32, columnGap: 16, rowGap: 16}}>
        {children}
      </GridProvider>
    </ThemeProvider>
  )
}
