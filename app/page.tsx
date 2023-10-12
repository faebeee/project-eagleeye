'use client'

import {
  ActionsWrapper,
  ArrowRightIcon,
  Button,
  Card,
  CardContent,
  CardHeader,
  FilterChip,
  TextField,
  Typography
} from '@dreipol/t3-ui'
import { GridColumn, GridRow } from '@dreipol/t3-react-grid'
import { useEffect, useState } from 'react'
import { Layout } from '../src/components/layout/layout'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { OgOverview } from '../src/components/og-overview/og-overview'
import { SitemapOverview } from '../src/components/sitemap-overview/sitemap-overview'
import { ResponseOverview } from '../src/components/response-overview/response-overview'
import { ShowOnRequest } from '../src/components/show-on-request/show-on-request'
import { PageSpeedOverview } from '../src/components/page-speed-overview/page-speed-overview'
import { CssOverview } from '../src/components/css/css-overview'
import { Header } from '../src/components/header/header'
import { MicrodataOverview } from '../src/components/microdata-overview/microdata-overview'
import { LoadOverview } from '../src/components/load-overview/load-overview'
import { HtmlValidOverview } from '../src/components/html-valid-overview/html-valid-overview'
import { BackendStatusOverview } from '../src/components/backend-status-overview/backend-status-overview'
import { PageSizeOverview } from '../src/components/page-size-overview/page-size-overview'
import { SeoOverview } from '../src/components/seo/seo-overview'
import { ExternalToolsOverview } from '../src/components/external-tools/external-tools-overview'
import { CssQualityOverview } from '../src/components/css/css-quality'
import classes from './page.scss'

export type MainPageProps = {
  site: string
}

export default function MainPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [ url, setUrl ] = useState('')
  const [ internalUrl, setInternalUrl ] = useState(searchParams.get('site') ?? '')
  const pathname = usePathname()

  useEffect(() => {
    const current = new URLSearchParams(Array.from(searchParams.entries())) // -> has to use this form
    current.set('site', url)
    const search = current.toString()
    // or const query = `${'?'.repeat(search.length && 1)}${search}`;
    const query = search ? `?${search}` : ''
    router.replace(`${pathname}${query}`)
  }, [ url ])

  const onGoClicked = () => {
    setUrl(internalUrl)
  }

  console.log(classes.root);

  return (<Layout
      header={
        <Header>
          <form style={{ width: '100%' }} onSubmit={(e) => {
            e.preventDefault()
            onGoClicked()
          }}>
            <ActionsWrapper fullWidth style={{ width: '100%' }} center>
              <TextField
                value={internalUrl}
                onChange={(val) => setInternalUrl(val)}
                placeholder={'https://example.com/my-path'} />
              <Button color={'primary'} variant={'filled'} onClick={onGoClicked} suffix={<ArrowRightIcon />}>Go</Button>
            </ActionsWrapper>
          </form>
        </Header>
      }>
      <div className={classes.root}>
        {!!url && <GridRow>
          <GridColumn colSpan={4}>
            <Card outlined elevated style={{ height: '600px' }}>
              <CardHeader divider suffix={<FilterChip
                color={'secondary'}>SEO</FilterChip>}>
                <ActionsWrapper direction={'column'}>
                  <Typography color={'text.primary'} variant={'heading2'}>OpenGraph</Typography>
                  <Typography color={'text.secondary'} variant={'caption'}>Showing the OpenGraph data configured in
                    the <code>meta</code> elements of the page</Typography>
                </ActionsWrapper>
              </CardHeader>
              <CardContent scrollable style={{ maxHeight: '600px' }} noHorizontalPadding>
                <OgOverview site={url} key={url} />
              </CardContent>
            </Card>
          </GridColumn>

          <GridColumn colSpan={4}>
            <Card outlined elevated style={{ height: '600px' }}>
              <CardHeader divider suffix={<FilterChip
                color={'primary'}>TECH</FilterChip>}>
                <ActionsWrapper direction={'column'}>
                  <Typography color={'text.primary'} variant={'heading2'}>Response</Typography>
                  <Typography color={'text.secondary'} variant={'caption'}>HTTP statuscode of the initial server
                    response</Typography>
                </ActionsWrapper>
              </CardHeader>
              <CardContent scrollable style={{ maxHeight: '600px' }} noHorizontalPadding>
                <ResponseOverview site={url} key={url} />
              </CardContent>
            </Card>
          </GridColumn>

          <GridColumn colSpan={4}>
            <Card outlined elevated style={{ height: '600px' }}>
              <CardHeader divider suffix={<FilterChip
                color={'secondary'}>SEO</FilterChip>}>
                <ActionsWrapper direction={'column'}>
                  <Typography color={'text.primary'} variant={'heading2'}>Sitemap</Typography>
                  <Typography color={'text.secondary'} variant={'caption'}>Content of the sitemap.xml of the crawled
                    page</Typography>
                </ActionsWrapper>
              </CardHeader>
              <CardContent scrollable style={{ maxHeight: '600px' }}>
                <SitemapOverview site={url} onSelect={(s) => {
                  setUrl(s)
                  setInternalUrl(s)
                }} />
              </CardContent>
            </Card>
          </GridColumn>

          <GridColumn colSpan={4}>
            <Card outlined elevated style={{ height: '600px' }}>
              <CardHeader divider suffix={<FilterChip
                color={'secondary'}>SEO</FilterChip>}>
                <ActionsWrapper direction={'column'}>
                  <Typography color={'text.primary'} variant={'heading2'}>SEO</Typography>
                  <Typography color={'text.secondary'} variant={'caption'}></Typography>
                </ActionsWrapper>
              </CardHeader>
              <CardContent scrollable style={{ maxHeight: '600px' }}>
                <SeoOverview site={url} />
              </CardContent>
            </Card>
          </GridColumn>

          <GridColumn colSpan={4}>
            <Card outlined elevated style={{ height: '600px' }}>
              <CardHeader divider suffix={<FilterChip
                color={'primary'}>TECH</FilterChip>}>
                <ActionsWrapper direction={'column'}>
                  <Typography color={'text.primary'} variant={'heading2'}>Page Weight</Typography>
                  <Typography color={'text.secondary'} variant={'caption'}>Google&apos;s page speed insight
                    size</Typography>
                </ActionsWrapper>
              </CardHeader>
              <CardContent scrollable style={{ maxHeight: '600px' }}>
                <PageSizeOverview site={url} />
              </CardContent>
            </Card>
          </GridColumn>

          <GridColumn colSpan={4}>
            <Card outlined elevated style={{ height: '600px' }}>
              <CardHeader divider suffix={<FilterChip
                color={'primary'}>TECH</FilterChip>}>
                <ActionsWrapper direction={'column'}>
                  <Typography color={'text.primary'} variant={'heading2'}>Pagespeed</Typography>
                  <Typography color={'text.secondary'} variant={'caption'}>Google&apos;s page speed insight results
                    running
                    lighthouse in the background</Typography>
                </ActionsWrapper>
              </CardHeader>
              <CardContent noHorizontalPadding scrollable style={{ maxHeight: '600px' }}>
                <PageSpeedOverview site={url} />
              </CardContent>
            </Card>
          </GridColumn>

          <GridColumn colSpan={4}>
            <Card outlined elevated style={{ height: '600px' }}>
              <CardHeader divider suffix={<FilterChip
                color={'secondary'}>SEO</FilterChip>}>
                <ActionsWrapper direction={'column'}>
                  <Typography color={'text.primary'} variant={'heading2'}>Microdata</Typography>
                  <Typography color={'text.secondary'} variant={'caption'}>Microdata crawled from the HTML response of
                    the
                    webpage</Typography>
                </ActionsWrapper>

              </CardHeader>
              <CardContent noHorizontalPadding scrollable style={{ maxHeight: '600px' }}>
                <MicrodataOverview site={url} />
              </CardContent>
            </Card>
          </GridColumn>

          <GridColumn colSpan={4}>
            <Card outlined elevated style={{ height: '600px' }}>
              <CardHeader divider suffix={<FilterChip
                color={'primary'}>TECH</FilterChip>}>
                <ActionsWrapper direction={'column'}>
                  <Typography color={'text.primary'} variant={'heading2'}>CSSStats</Typography>
                  <Typography color={'text.secondary'} variant={'caption'}>CSS stats about specificity and
                    size</Typography>
                </ActionsWrapper>
              </CardHeader>
              <CardContent noHorizontalPadding scrollable style={{ maxHeight: '600px' }}>
                <CssOverview site={url} />
              </CardContent>
            </Card>
          </GridColumn>

          <GridColumn colSpan={4}>
            <Card outlined elevated style={{ height: '600px' }}>
              <CardHeader divider suffix={<FilterChip
                color={'primary'}>TECH</FilterChip>}>
                <ActionsWrapper direction={'column'}>
                  <Typography color={'text.primary'} variant={'heading2'}>CSSQuality</Typography>
                  <Typography color={'text.secondary'} variant={'caption'}>CSS stats about specificity and
                    size</Typography>
                </ActionsWrapper>
              </CardHeader>
              <CardContent scrollable style={{ maxHeight: '600px' }}>
                <CssQualityOverview site={url} />
              </CardContent>
            </Card>
          </GridColumn>

          <GridColumn colSpan={4}>
            <Card outlined elevated style={{ height: '600px' }}>
              <CardHeader divider suffix={<FilterChip
                color={'primary'}>TECH</FilterChip>}>
                <ActionsWrapper direction={'column'}>
                  <Typography color={'text.primary'} variant={'heading2'}>Load</Typography>
                  <Typography color={'text.secondary'} variant={'caption'}>Load testing starting 500 requests against
                    the
                    server and gets the avg times</Typography>
                </ActionsWrapper>
              </CardHeader>
              <CardContent noHorizontalPadding scrollable style={{ maxHeight: '600px' }}>
                <ShowOnRequest key={url}>
                  <LoadOverview site={url} />
                </ShowOnRequest>
              </CardContent>
            </Card>
          </GridColumn>

          <GridColumn colSpan={4}>
            <Card outlined elevated style={{ height: '600px' }}>
              <CardHeader divider suffix={<FilterChip
                color={'secondary'}>SEO</FilterChip>}>
                <ActionsWrapper direction={'column'}>
                  <Typography color={'text.primary'} variant={'heading2'}>HTML Validator</Typography>
                  <Typography color={'text.secondary'} variant={'caption'}>HTML validator errors and warning for the
                    crawled HTML</Typography>
                </ActionsWrapper>
              </CardHeader>
              <CardContent scrollable style={{ maxHeight: '600px' }} noHorizontalPadding>
                <HtmlValidOverview site={url} />
              </CardContent>
            </Card>
          </GridColumn>

          <GridColumn colSpan={4}>
            <Card outlined elevated style={{ height: '600px' }}>
              <CardHeader divider suffix={<FilterChip
                color={'primary'}>TECH</FilterChip>}>
                <ActionsWrapper direction={'column'}>
                  <Typography color={'text.primary'} variant={'heading2'}>External Tools</Typography>
                  <Typography color={'text.secondary'} variant={'caption'}>Open external tools for current
                    site</Typography>
                </ActionsWrapper>
              </CardHeader>
              <CardContent scrollable style={{ maxHeight: '600px' }} noHorizontalPadding>
                <ExternalToolsOverview site={url} />
              </CardContent>
            </Card>
          </GridColumn>
        </GridRow>}
      </div>
      <BackendStatusOverview />
    </Layout>
  )
}
