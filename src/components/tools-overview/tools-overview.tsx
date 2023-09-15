import { useResource } from '@dreipol/t3-api-utils'
import { GridColumn, GridRow } from '@dreipol/t3-react-grid'
import { List, ListItem, Typography } from '@dreipol/t3-ui'

export type ToolsOverviewProps = {
  site: string
}

export const ToolsOverview = ({site}: ToolsOverviewProps) => {
  const data = useResource<{
    url: string, results: {
      technologies: { name: string, description: string, website: string }[]
    }
  }[]>({
    url: `/api/tools`, params: {
      site
    }
  })
  if (data.isLoading) {
    return <Typography color={'text.secondary'}>Loading...</Typography>
  }

  return <GridRow>
    <GridColumn colSpan={12}>
      <List>
        {data.data?.[0].results.technologies.map((tech) => (<ListItem key={tech.name}>
            <Typography color={'text.secondary'} variant={'label2'}>{tech.name}</Typography>
            <Typography color={'text.primary'} variant={'label'}>{tech.description}</Typography>
          </ListItem>
        ))}
      </List>
    </GridColumn>
  </GridRow>
}
