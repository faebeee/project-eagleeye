import '@dreipol/t3-ui/lib/bundle.css'
import '@dreipol/t3-react-grid/lib/bundle.css'
import '@dreipol/t3-react-theme/lib/bundle.css'

import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { ThemeProvider } from '@dreipol/t3-react-theme'
import { theme } from '../src/theme'
import { GridProvider } from '@dreipol/t3-react-grid'

const inter = Inter({subsets: [ 'latin' ]})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <ThemeProvider theme={theme}>
      <GridProvider>
        {children}
      </GridProvider>
    </ThemeProvider>
    </body>
    </html>
  )
}
