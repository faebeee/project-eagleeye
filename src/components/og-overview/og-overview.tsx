import { useResource } from '@dreipol/t3-api-utils'
import { GridColumn, GridRow } from '@dreipol/t3-react-grid'
import { List, ListItem, Typography } from '@dreipol/t3-ui'
import { OgObject } from 'open-graph-scraper/dist/lib/types'
import { useMemo } from 'react'

export type OgOverviewProps = {
  site: string
}

export const OgOverview = ({site}: OgOverviewProps) => {
  const data = useResource<OgObject>({
    url: `/api/og`, params: {
      site
    }
  })

  const result = useMemo(() => data.data, [ data ])

  if (data.isLoading || !result) {
    return null
  }

  return <GridRow>
    <GridColumn colSpan={12}>
      <Typography variant={'heading2'}>OpenGraph</Typography>
    </GridColumn>
    <GridColumn colSpan={12}>
      <List>
        <ListItem color={'primary'}>
          <Typography variant={'label'}>og:sitename</Typography>
          <Typography>{result.ogSiteName}</Typography>
        </ListItem>

        <ListItem color={'primary'}>
          <Typography variant={'label'}>og:description</Typography>
          <Typography>{result.ogDescription}</Typography>
        </ListItem>

        <ListItem color={'primary'}>
          <Typography variant={'label'}>og:ogType</Typography>
          <Typography>{result.ogType}</Typography>
        </ListItem>

        <ListItem color={'primary'}>
          <Typography variant={'label'}>og:title</Typography>
          <Typography>{result.ogTitle}</Typography>
        </ListItem>

        <ListItem color={'primary'}>
          <Typography variant={'label'}>og:image</Typography>
          <img width={400} src={result.ogImage![0].url} alt={'og image'} />
        </ListItem>
      </List>
    </GridColumn>
  </GridRow>
}
