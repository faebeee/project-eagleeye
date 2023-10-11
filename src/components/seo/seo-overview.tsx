import { useResource } from '@dreipol/t3-api-utils'
import { useMemo } from 'react'
import { GridColumn, GridRow } from '@dreipol/t3-react-grid'
import { ActionsWrapper, ContextChip, List, ListItem, Typography } from '@dreipol/t3-ui'

export type CssOverviewProps = {
  site: string
}

type Response = {
  robots:string[]
  description:string[]
  title:string[]
  h1:string[]
  h2:string[]
  h3:string[]
  h4:string[]
  h5:string[]
  h6:string[]
  links:string[]
}

export const SeoOverview = ({ site }: CssOverviewProps) => {
  const data = useResource<Response>({
    url: `/api/seo`, params: {
      site
    }
  })

  const result = useMemo(() => data.data, [ data ])

  if (data.isLoading || !result) {
    return null
  }

  if (data.error) {
    return <Typography color={'signal.error.main'}>Failed, {data.error.message}</Typography>
  }

  return <GridRow>
    <GridColumn colSpan={12}>
      <List>
        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>Robots</Typography>
          <Typography color={'text.primary'} variant={'label'}>{data.data?.robots.length}</Typography>
        </ListItem>
        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>Description</Typography>
          <Typography color={'text.primary'} variant={'label'}>{data.data?.description.length}</Typography>
        </ListItem>
        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>Title</Typography>
          <Typography color={'text.primary'} variant={'label'}>{data.data?.title.length}</Typography>
        </ListItem>
        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>H1</Typography>
          <Typography color={'text.primary'} variant={'label'}>{data.data?.h1.length}</Typography>
        </ListItem>
        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>H2</Typography>
          <Typography color={'text.primary'} variant={'label'}>{data.data?.h2.length}</Typography>
        </ListItem>
        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>H3</Typography>
          <Typography color={'text.primary'} variant={'label'}>{data.data?.h3.length}</Typography>
        </ListItem>
        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>Links</Typography>
          <Typography color={'text.primary'} variant={'label'}>{data.data?.links.length}</Typography>
        </ListItem>
      </List>
    </GridColumn>
  </GridRow>
}
