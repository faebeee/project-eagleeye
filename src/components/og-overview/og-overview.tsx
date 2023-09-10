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
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/og-scrap`, params: {
      site
    }
  })

  const result = useMemo(() => data.data, [ data ])

  if (data.isLoading || !result) {
    return null
  }

  return <GridRow>
    <GridColumn colSpan={12}>
      <List>
        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>og:sitename</Typography>
          <Typography color={'text.primary'} variant={'label'}>{result.ogSiteName}</Typography>
        </ListItem>

        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>og:description</Typography>
          <Typography color={'text.primary'} variant={'label'}>{result.ogDescription}</Typography>
        </ListItem>

        <ListItem>
          <Typography color={'text.primary'} variant={'label2'}>og:ogType</Typography>
          <Typography color={'text.primary'} variant={'label'}>{result.ogType}</Typography>
        </ListItem>

        <ListItem>
          <Typography color={'text.primary'} variant={'label'}>og:title</Typography>
          <Typography color={'text.primary'}>{result.ogTitle}</Typography>
        </ListItem>

        <ListItem>
          <Typography color={'text.primary'} variant={'label'}>og:image</Typography>
          {result.ogImage?.[0] && <img width={400} src={result.ogImage![0].url} alt={'og image'} />}
        </ListItem>
      </List>
    </GridColumn>
  </GridRow>
}
