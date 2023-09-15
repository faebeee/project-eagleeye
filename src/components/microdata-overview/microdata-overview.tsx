import { useResource } from '@dreipol/t3-api-utils'
import { GridColumn, GridRow } from '@dreipol/t3-react-grid'
import { List, ListItem, Typography } from '@dreipol/t3-ui'

export type MicrodataOverviewProps = {
  site: string
}

export const MicrodataOverview = ({site}: MicrodataOverviewProps) => {
  const data = useResource<{ name: string, id: string, properties: Record<string, string> }[]>({
    url: `/api/microdata`, params: {
      site
    }
  })

  return <GridRow>
    <GridColumn colSpan={12}>

      {!data.data?.length  && <Typography>No Microdata found</Typography>}

      {data.data?.map((entry) => (<List key={entry.id}>
        <ListItem color={'secondary'}>
          <Typography variant={'button'}>{entry.name}</Typography>
        </ListItem>
        {Object.entries(entry.properties).map(([ key, value ]) => <ListItem key={key}>
          <Typography color={'text.secondary'} variant={'label2'}>{key}</Typography>
          <Typography variant={'label'}>{value}</Typography>
        </ListItem>)}
      </List>))}

    </GridColumn>
  </GridRow>
}
