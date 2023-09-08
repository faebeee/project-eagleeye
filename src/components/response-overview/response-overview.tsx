import { useResource } from '@dreipol/t3-api-utils'
import { GridColumn, GridRow } from '@dreipol/t3-react-grid'
import { List, ListItem, Typography } from '@dreipol/t3-ui'
import classes from '../sitemap-overview/sitemap-overview.module.css'

export type ResponseOverviewProps = {
  site: string
}
export const ResponseOverview = ({site}: ResponseOverviewProps) => {
  const data = useResource<{ status: number }>({
    url: `/api/response-check`, params: {
      site: `${site}`
    }
  })


  if (data.isLoading) {
    return null
  }


  return <GridRow>
    <GridColumn colSpan={12}>
      <Typography variant={'heading2'}>Response Check</Typography>
    </GridColumn>
    <GridColumn colSpan={12}>
      <List className={classes.list}>
        <ListItem>
          {data.data?.status}
        </ListItem>
      </List>
    </GridColumn>
  </GridRow>
}
