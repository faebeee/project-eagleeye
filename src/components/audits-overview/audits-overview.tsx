import { GridColumn, GridRow } from '@dreipol/t3-react-grid'
import { List, ListItem, TextLink, Typography } from '@dreipol/t3-ui'

export type ToolsOverviewProps = {
  site: string
}

export const AuditsOverview = ({ site }: ToolsOverviewProps) => {
  return <GridRow>
    <GridColumn colSpan={12}>
      <List>

        <ListItem>
          <TextLink target={'_blank'} href={'https://www.npmjs.com/package/simple-website-audit'}>
            <Typography color={'text.primary'} variant={'label2'}>simple-website-audit</Typography>
          </TextLink>
          <Typography color={'text.secondary'} variant={'label'}>The simple package API to check the health of your
            site.</Typography>
        </ListItem>

        <ListItem>
          <TextLink target={'_blank'} href={'https://www.npmjs.com/package/@projectwallace/css-code-quality'}>
            <Typography color={'text.primary'} variant={'label2'}>@projectwallace/css-code-quality</Typography>
          </TextLink>
          <Typography color={'text.secondary'} variant={'label'}>Calculate the Code Quality score of your CSS based on a
            range of different quality guards.</Typography>
        </ListItem>

        <ListItem>
          <TextLink target={'_blank'} href={'https://www.npmjs.com/package/cssstats'}>
            <Typography color={'text.primary'} variant={'label2'}>cssstats</Typography>
          </TextLink>
          <Typography color={'text.secondary'} variant={'label'}>Parses stylesheets and returns an object with statistics.
            This is the core module used in cssstats.com</Typography>
        </ListItem>

        <ListItem>
          <TextLink target={'_blank'} href={'https://www.npmjs.com/package/html-validator'}>
            <Typography color={'text.primary'} variant={'label2'}>html-validator</Typography>
          </TextLink>
          <Typography color={'text.secondary'} variant={'label'}>
            A Node.js module for validating html using validator.w3.org/nu or html-validate
          </Typography>
        </ListItem>

        <ListItem>
          <TextLink target={'_blank'} href={'https://www.npmjs.com/package/loadtest'}>
            <Typography color={'text.primary'} variant={'label2'}>loadtest</Typography>
          </TextLink>
          <Typography color={'text.secondary'} variant={'label'}>
            Runs a load test on the selected HTTP or WebSockets URL. The API allows for easy integration in your own tests.
          </Typography>
        </ListItem>

        <ListItem>
          <TextLink target={'_blank'} href={'https://www.npmjs.com/package/microdata-parser-ts'}>
            <Typography color={'text.primary'} variant={'label2'}>microdata-parser-ts</Typography>
          </TextLink>
          <Typography color={'text.secondary'} variant={'label'}>
            Lightweight microdata parser and extractor written in TypeScript. Easily scrape microdata from websites.
          </Typography>
        </ListItem>

        <ListItem>
          <TextLink target={'_blank'} href={'https://www.npmjs.com/package/open-graph-scraper'}>
            <Typography color={'text.primary'} variant={'label2'}>open-graph-scraper</Typography>
          </TextLink>
          <Typography color={'text.secondary'} variant={'label'}>
            A simple node module(with TypeScript declarations) for scraping Open Graph and Twitter Card info off a site.
          </Typography>
        </ListItem>

        <ListItem>
          <TextLink target={'_blank'} href={'https://www.npmjs.com/package/psi'}>
            <Typography color={'text.primary'} variant={'label2'}>psi</Typography>
          </TextLink>
          <Typography color={'text.secondary'} variant={'label'}>
            Run mobile and desktop performance tests for your deployed site using Google PageSpeed Insights v5 with tidy reporting for your build process.
          </Typography>
        </ListItem>

        <ListItem>
          <TextLink target={'_blank'} href={'https://www.npmjs.com/package/seo-scraper'}>
            <Typography color={'text.primary'} variant={'label2'}>seo-scraper</Typography>
          </TextLink>
          <Typography color={'text.secondary'} variant={'label'}>
            Scrape SEO elements by default or whatever you need with easy customizations with this Web Scraper built in Node.js
          </Typography>
        </ListItem>
      </List>
    </GridColumn>
  </GridRow>
}
