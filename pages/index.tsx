import { TextField, Typography } from '@dreipol/t3-ui'
import { GridColumn, GridRow } from '@dreipol/t3-react-grid'
import { useEffect, useState } from 'react'
import { Layout } from '../src/components/layout/layout'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { OgOverview } from '../src/components/og-overview/og-overview'
import { SitemapOverview } from '../src/components/sitemap-overview/sitemap-overview'
import { ResponseOverview } from '../src/components/response-overview/response-overview'
import { ShowOnRequest } from '../src/components/show-on-request/show-on-request'
import { GetServerSideProps } from 'next'
import { PageSpeedOverview } from '../src/components/page-speed-overview/page-speed-overview'
import { Surface } from '../src/components/surface/surface'
import { CssOverview } from '../src/components/css-overview/css-overview'

export const getServerSideProps: GetServerSideProps<{site:string}> = async (req) => {
  const site = req.query.site as string ?? ''

  return {
    props: {
      site
    }
  }
}

export type MainPageProps = {
  site: string
}

export const MainPage = ({site}: MainPageProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [ url, setUrl ] = useState(site)
  const pathname = usePathname()

  useEffect(() => {
    const current = new URLSearchParams(Array.from(searchParams.entries())) // -> has to use this form
    current.set('site', url)
    const search = current.toString()
    // or const query = `${'?'.repeat(search.length && 1)}${search}`;
    const query = search ? `?${search}` : ''
    router.replace(`${pathname}${query}`)
  }, [ url ])

  return (<Layout
      header={
        <GridRow>
          <GridColumn colSpan={12}>
            <TextField
              value={url}
              onChange={(val) => setUrl(val)}
              label={'URL'} placeholder={'https://example.com/my-path'} />
          </GridColumn>
        </GridRow>}>
      <GridRow
        breakpoints={{
        '(max-size:680px)':{columns: 4},
        '(max-size:980px)':{columns: 8},
      }}>
        <GridColumn colSpan={4}>
          <Surface color={'neutral.main'} square outlined fillHeight header={<Typography color={'text.primary'} variant={'heading2'}>OpenGraph</Typography>}>
            <OgOverview site={url} key={url} />
          </Surface>
        </GridColumn>

        <GridColumn colSpan={4}>
          <Surface color={'neutral.main'} outlined fillHeight header={<Typography color={'text.primary'} variant={'heading2'}>Response</Typography>}>
            <ResponseOverview site={url} key={url} />
          </Surface>
        </GridColumn>

        <GridColumn colSpan={4}>
          <Surface color={'neutral.main'} square outlined fillHeight header={<Typography color={'text.primary'} variant={'heading2'}>Sitemap</Typography>}>
            <ShowOnRequest key={url}>
              <SitemapOverview site={url} />
            </ShowOnRequest>
          </Surface>
        </GridColumn>

        <GridColumn colSpan={4}>
          <Surface color={'neutral.main'} square outlined fillHeight header={<Typography color={'text.primary'} variant={'heading2'}>Pagespeed</Typography>}>
            <ShowOnRequest key={url}>
              <PageSpeedOverview site={url} />
            </ShowOnRequest>
          </Surface>
        </GridColumn>

        <GridColumn colSpan={4}>
          <Surface color={'neutral.main'} square outlined fillHeight header={<Typography color={'text.primary'} variant={'heading2'}>CSSStats</Typography>}>
            <ShowOnRequest key={url}>
              <CssOverview site={url} />
            </ShowOnRequest>
          </Surface>
        </GridColumn>

      </GridRow>
    </Layout>
  )
}
export default MainPage
