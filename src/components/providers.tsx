import { GridProvider } from '@dreipol/t3-react-grid'
import { PropsWithChildren } from 'react'
import { ThemeProvider } from '@dreipol/t3-react-theme'
import { theme } from '../theme'

export function Providers({children}: PropsWithChildren<{}>) {
  return (
    <ThemeProvider theme={theme}>
      <GridProvider config={{bezelGap: 32, columnGap: 16, rowGap: 16}}>
        {children}
      </GridProvider>
    </ThemeProvider>
  )
}
