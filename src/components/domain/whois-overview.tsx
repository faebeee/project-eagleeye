import { useResource } from '@dreipol/t3-api-utils'
import { GridColumn, GridRow } from '@dreipol/t3-react-grid'
import { List, ListItem, Typography } from '@dreipol/t3-ui'

export type WhoisOverviewProps = {
  site: string
}

export const WhoisOverview = ({site}: WhoisOverviewProps) => {
  const data = useResource<{ whois: Record<string, any> }>({
    url: `/api/domain`,
    params: {
      site
    },
    options: {
      shouldRetryOnError: false
    }
  })

  if (data.isLoading || !data) {
    return <Typography>Loading...</Typography>
  }

  if (data.error) {
    return <Typography color={'signal.error.main'}>{data.error}</Typography>
  }

  return <GridRow>
    <GridColumn colSpan={12}>
      <List>
        {Object.entries(data.data?.whois ?? {}).map(([ domainKey, domainValues ]) => (<div key={domainKey}>
          <ListItem>
            <Typography variant={'label2'} color={'secondary'}>{domainKey}</Typography>
          </ListItem>
          {Object.entries(domainValues).map(([ key, value ]) => (<ListItem key={key}>
            <Typography color={'text.secondary'} variant={'label2'}>{key}</Typography>
            <Typography variant={'label'}>{value as string}</Typography>
          </ListItem>))}
        </div>))}
      </List>
    </GridColumn>
  </GridRow>
}
