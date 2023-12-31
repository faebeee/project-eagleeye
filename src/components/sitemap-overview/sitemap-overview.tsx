import { useResource } from '@dreipol/t3-api-utils'
import { GridColumn, GridRow } from '@dreipol/t3-react-grid'
import { List, ListItem, Typography } from '@dreipol/t3-ui'
import classes from './sitemap-overview.module.css'

export type SitemapOverviewProps = {
  site: string,
  onSelect: (site:string) => void;
}
export const SitemapOverview = ({site, onSelect}: SitemapOverviewProps) => {
  const data = useResource<string[]>({
    url: `/api/sitemap`, params: {
      site: `${site}/sitemap.xml`
    }
  })

  if (data.isLoading) {
    return <Typography color={'text.secondary'}>Loading...</Typography>
  }

  return <GridRow>
    {!!data.data?.length && <GridColumn colSpan={12}>
      <Typography color={'text.primary'}>Found {data.data?.length ?? 0} Sites</Typography>
    </GridColumn>}
    <GridColumn colSpan={12}>
      <List className={classes.list}>
        {!data.data?.length && <ListItem><Typography color={'signal.error'}>No sitemap found</Typography></ListItem>}

        {data.data?.map((s) => (<ListItem key={s} onClick={() => onSelect(s)}>
          <Typography color={'text.primary'} wrapText={false}>{s}</Typography>
        </ListItem>))}
      </List>
    </GridColumn>
  </GridRow>
}
