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
    url: `/api/og-scrap`,
    params: {
      site
    },
    options: {
      shouldRetryOnError:false
    }
  })

  const result = useMemo(() => data.data, [ data ])

  if (data.isLoading || !result) {
    return <Typography>Loading...</Typography>
  }

  if (data.error) {
    return <Typography color={'signal.error.main'}>{data.error}</Typography>
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
          <Typography color={'text.secondary'} variant={'label2'}>og:ogType</Typography>
          <Typography color={'text.primary'} variant={'label'}>{result.ogType}</Typography>
        </ListItem>

        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>og:title</Typography>
          <Typography color={'text.primary'} variant={'label'}>{result.ogTitle}</Typography>
        </ListItem>

        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>og:image</Typography>
          {result.ogImage?.[0] && <img width={400} src={result.ogImage![0].url} alt={'og image'} />}
        </ListItem>
      </List>
    </GridColumn>
  </GridRow>
}
