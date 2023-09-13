import { useResource } from '@dreipol/t3-api-utils'
import { GridColumn, GridRow } from '@dreipol/t3-react-grid'
import { List, ListItem, Typography } from '@dreipol/t3-ui'
import classes from './sitemap-overview.module.css'
import { ResponseStatus } from '../response-status/response-status'

export type SitemapOverviewProps = {
  site: string
}
export const SitemapOverview = ({site}: SitemapOverviewProps) => {
  const data = useResource<string[]>({
    url: `/api/sitemap`, params: {
      site: `${site}/sitemap.xml`
    }
  })

  if (data.isLoading) {
    return <Typography color={'text.secondary'}>Loading...</Typography>
  }

  return <GridRow>
    <GridColumn colSpan={12}>
      <Typography color={'text.primary'}>Found {data.data?.length ?? 0} Sites</Typography>
    </GridColumn>
    <GridColumn colSpan={12}>
      <List className={classes.list}>
        {data.data?.map((s) => (<ListItem key={s}>
          <Typography color={'text.primary'} wrapText={false}>{s}</Typography>
        </ListItem>))}
      </List>
    </GridColumn>
  </GridRow>
}
