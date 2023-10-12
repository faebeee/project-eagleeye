import { useResource } from '@dreipol/t3-api-utils'
import { GridColumn, GridRow } from '@dreipol/t3-react-grid'
import { Avatar, List, ListItem, TextLink, Typography } from '@dreipol/t3-ui'
import { useMemo } from 'react'

export type ExternalToolsOverviewProps = {
  site: string
}

export const ExternalToolsOverview = ({site}: ExternalToolsOverviewProps) => {
  return <GridRow>
    <GridColumn colSpan={12}>
      <List>
        <ListItem>
          <Typography color={'text.primary'}>
            <TextLink href={`https://search.google.com/test/rich-results?url=${site}`} target={'_blank'}>Google Rich Result</TextLink>
          </Typography>

          <Typography variant={'caption'} color={'text.secondary'}>
            Rich results are experiences on Google surfaces, such as Search, that go beyond the standard blue link. Rich results can include carousels, images or other non-textual elements.
          </Typography>

        </ListItem>

        <ListItem>
          <Typography color={'text.primary'}>
            <TextLink href={`https://www.projectwallace.com/analyze-css?url=${site}&prettify=1`} target={'_blank'}>CSS Analyzer</TextLink>
          </Typography>
          <Typography variant={'caption'} color={'text.secondary'}>
            Analytics for CSS
          </Typography>

        </ListItem>

        <ListItem>
          <Typography color={'text.primary'}>
            <TextLink href={`https://www.projectwallace.com/css-code-quality?url=${site}&prettify=1`} target={'_blank'}>Code Quality Analyzer</TextLink>
          </Typography>
          <Typography variant={'caption'} color={'text.secondary'}>
            Calculate the Code Quality score of your CSS based on a range of different quality guards.
          </Typography>
        </ListItem>

        <ListItem>
          <Typography color={'text.primary'}>
            <TextLink href={`https://whatcms.org/?s=${site}`} target={'_blank'}>WhatCms</TextLink>
          </Typography>
          <Typography variant={'caption'} color={'text.secondary'}>
            Get detailed information about the technologies used to power any website. Our algorithm reveals content management systems, e-commerce platforms, web frameworks, programming languages and more.
          </Typography>
        </ListItem>


      </List>
    </GridColumn>
  </GridRow>
}
