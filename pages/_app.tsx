import '@dreipol/t3-react-theme/lib/bundle.css'
import '@dreipol/t3-react-grid/lib/bundle.css'
import '@dreipol/t3-ui/lib/bundle.css'
import { Inter } from 'next/font/google'
import { Providers } from '../src/components/providers'
import { AppProps } from 'next/app'

const inter = Inter({subsets: [ 'latin' ]})

export function App({
  Component,
  pageProps: {session, ...pageProps}
}: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}

export default App
