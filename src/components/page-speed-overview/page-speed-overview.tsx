import { useResource } from '@dreipol/t3-api-utils'
import { GridColumn, GridRow } from '@dreipol/t3-react-grid'
import { List, ListItem, Typography } from '@dreipol/t3-ui'
import { Category } from 'psi'

export type PageSpeedOverviewProps = {
  site: string
}

export const PageSpeedOverview = ({site}: PageSpeedOverviewProps) => {
  const data = useResource<Record<'performance', Category>>({
    url: `/api/page-speed`, params: {
      site
    }
  })
  if (data.isLoading || !data) {
    return <Typography>Loading...</Typography>
  }

  console.log(data)
  return <GridRow>
    <GridColumn colSpan={12}>
      <List>
        <ListItem>
          {/* @ts-ignore*/}
          <Typography color={'text.primary'} variant={'label'}>{data.data?.performance.score * 100}</Typography>
        </ListItem>

      </List>
    </GridColumn>
  </GridRow>
}
