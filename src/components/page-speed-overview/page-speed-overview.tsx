import { useResource } from '@dreipol/t3-api-utils'
import { GridColumn, GridRow } from '@dreipol/t3-react-grid'
import { ContextChip, List, ListItem, Typography } from '@dreipol/t3-ui'
import { Category } from 'psi'

export type PageSpeedOverviewProps = {
  site: string
}

const categories = [
  {label: 'Initial Server Response Time', key: 'server-response-time'},
  {label: 'DOM Size', key: 'dom-size'},
  {label: 'Server Backend Latencies', key: 'network-server-latency'},
  {label: 'First Contentful Paint', key: 'first-contentful-paint'},
  {label: 'First Meaningful Paint', key: 'first-meaningful-paint'},
  {label: 'Largest Contentful Paint', key: 'largest-contentful-paint'},
  {label: 'Time to Interactive', key: 'interactive'},
  {label: 'JavaScript execution time', key: 'bootup-time'},
  {label: 'total-byte-weight', key: 'total-byte-weight'}
]

export const PageSpeedOverview = ({site}: PageSpeedOverviewProps) => {
  const data = useResource<any>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/pagespeed`, params: {
      site
    }
  })
  if (data.isLoading || !data) {
    return <Typography>Loading...</Typography>
  }

  return <GridRow>
    <GridColumn colSpan={12}>
      <List>
        <ListItem>
          <div>
            <ContextChip color={'primary'} label={`Score: ${Math.round(data.data?.categories.performance.score * 100)}`} />
          </div>
        </ListItem>
        {categories.map((cat) => (
          <ListItem key={cat.key}>
            {/* @ts-ignore*/}
            <Typography color={'text.primary'} variant={'label2'}>{cat.label}</Typography>
            <Typography color={'text.primary'} variant={'label'}>{data.data?.audits[cat.key].displayValue}</Typography>
          </ListItem>
        ))}
      </List>
    </GridColumn>
  </GridRow>
}
