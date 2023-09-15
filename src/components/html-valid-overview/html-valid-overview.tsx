import { useResource } from '@dreipol/t3-api-utils'
import { GridColumn, GridRow } from '@dreipol/t3-react-grid'
import { Avatar, List, ListItem, Typography } from '@dreipol/t3-ui'
import { useMemo } from 'react'

export type HtmlValidOverviewProps = {
  site: string
}

export const HtmlValidOverview = ({site}: HtmlValidOverviewProps) => {
  const data = useResource<{
    messages: {
      type: string,
      message: string,
      extract: string,
    }[]
  }>({
    url: `/api/html-valid`, params: {
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
        {data.data?.messages.map((msg) => (<ListItem key={msg.extract}
            prefix={msg.type === 'info' ? <Avatar color={'signal.warning'} /> : <Avatar color={'signal.error'} />}>
            <Typography color={'text.secondary'} variant={'label2'}>{msg.message}</Typography>
            <Typography color={'text.primary'} variant={'label'}>{msg.extract}</Typography>
          </ListItem>
        ))}
      </List>
    </GridColumn>
  </GridRow>
}
