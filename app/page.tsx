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
import { CssOverview } from '../src/components/css-overview/css-overview'
import { Header } from '../src/components/header/header'
import { MicrodataOverview } from '../src/components/microdata-overview/microdata-overview'
import { WhoisOverview } from '../src/components/domain/whois-overview'
import { LoadOverview } from '../src/components/load-overview/load-overview'
import { HtmlValidOverview } from '../src/components/html-valid-overview/html-valid-overview'
import { ToolsOverview } from '../src/components/tools-overview/tools-overview'
import { BackendStatusOverview } from '../src/components/backend-status-overview/backend-status-overview'

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

  return (<Layout
      header={
        <Header>
          <form style={{width: '100%'}} onSubmit={(e) => {
            e.preventDefault()
            onGoClicked()
          }}>
            <ActionsWrapper fullWidth style={{width: '100%'}}>
              <TextField
                value={internalUrl}
                onChange={(val) => setInternalUrl(val)}
                placeholder={'https://example.com/my-path'} />
              <Button color={'primary'} variant={'filled'} onClick={onGoClicked} suffix={<ArrowRightIcon />}>Go</Button>
            </ActionsWrapper>
          </form>
        </Header>
      }>
      {!!url && <GridRow>
        <GridColumn colSpan={4}>
          <Card outlined elevated style={{height: '600px'}}>
            <CardHeader divider suffix={<FilterChip
              color={'secondary'} label={'SEO'} />}>
              <Typography color={'text.primary'} variant={'heading2'}>OpenGraph</Typography>
            </CardHeader>
            <CardContent scrollable style={{maxHeight: '600px'}} noHorizontalPadding>
              <OgOverview site={url} key={url} />
            </CardContent>
          </Card>
        </GridColumn>

        <GridColumn colSpan={4}>
          <Card outlined elevated style={{height: '600px'}}>
            <CardHeader divider suffix={<FilterChip
              color={'primary'} label={'TECH'} />}>
              <Typography color={'text.primary'} variant={'heading2'}>Response</Typography>
            </CardHeader>
            <CardContent scrollable style={{maxHeight: '600px'}} noHorizontalPadding>
              <ResponseOverview site={url} key={url} />
            </CardContent>
          </Card>
        </GridColumn>

        <GridColumn colSpan={4}>
          <Card outlined elevated style={{height: '600px'}}>
            <CardHeader divider suffix={<FilterChip
              color={'secondary'} label={'SEO'} />}>
              <Typography color={'text.primary'} variant={'heading2'}>Sitemap</Typography>
            </CardHeader>
            <CardContent scrollable style={{maxHeight: '600px'}}>
              <SitemapOverview site={url} />
            </CardContent>
          </Card>
        </GridColumn>

        <GridColumn colSpan={4}>
          <Card outlined elevated style={{height: '600px'}}>
            <CardHeader divider suffix={<FilterChip
              color={'primary'} label={'TECH'} />}>
              <Typography color={'text.primary'} variant={'heading2'}>Pagespeed</Typography>
            </CardHeader>
            <CardContent noHorizontalPadding scrollable style={{maxHeight: '600px'}}>
              <ShowOnRequest key={url}>
                <PageSpeedOverview site={url} />
              </ShowOnRequest>
            </CardContent>
          </Card>
        </GridColumn>

        <GridColumn colSpan={4}>
          <Card outlined elevated style={{height: '600px'}}>
            <CardHeader divider suffix={<FilterChip
              color={'secondary'} label={'SEO'} />}>
              <Typography color={'text.primary'} variant={'heading2'}>Microdata</Typography>
            </CardHeader>
            <CardContent noHorizontalPadding scrollable style={{maxHeight: '600px'}}>
              <MicrodataOverview site={url} />
            </CardContent>
          </Card>
        </GridColumn>

        <GridColumn colSpan={4}>
          <Card outlined elevated style={{height: '600px'}}>
            <CardHeader divider suffix={<FilterChip
              color={'primary'} label={'TECH'} />}>
              <Typography color={'text.primary'} variant={'heading2'}>CSSStats</Typography>
            </CardHeader>
            <CardContent noHorizontalPadding scrollable style={{maxHeight: '600px'}}>
              <CssOverview site={url} />
            </CardContent>
          </Card>
        </GridColumn>

        <GridColumn colSpan={4}>
          <Card outlined elevated style={{height: '600px'}}>
            <CardHeader divider suffix={<FilterChip
              color={'primary'} label={'TECH'} />}>
              <Typography color={'text.primary'} variant={'heading2'}>Whois</Typography>
            </CardHeader>
            <CardContent noHorizontalPadding scrollable style={{maxHeight: '600px'}}>
              <WhoisOverview site={url} />
            </CardContent>
          </Card>
        </GridColumn>

        <GridColumn colSpan={4}>
          <Card outlined elevated style={{height: '600px'}}>
            <CardHeader divider suffix={<FilterChip
              color={'primary'} label={'TECH'} />}>
              <Typography color={'text.primary'} variant={'heading2'}>Load</Typography>
            </CardHeader>
            <CardContent noHorizontalPadding scrollable style={{maxHeight: '600px'}}>
              <ShowOnRequest key={url}>
                <LoadOverview site={url} />
              </ShowOnRequest>
            </CardContent>
          </Card>
        </GridColumn>

        <GridColumn colSpan={4}>
          <Card outlined elevated style={{height: '600px'}}>
            <CardHeader divider suffix={<FilterChip
              color={'secondary'} label={'SEO'} />}>
              <Typography color={'text.primary'} variant={'heading2'}>HTML Validator</Typography>
            </CardHeader>
            <CardContent scrollable style={{maxHeight: '600px'}} noHorizontalPadding>
              <HtmlValidOverview site={url} />
            </CardContent>
          </Card>
        </GridColumn>
      </GridRow>}

      <BackendStatusOverview/>
    </Layout>
  )
}
