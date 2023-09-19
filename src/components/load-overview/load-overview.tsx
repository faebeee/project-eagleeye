import { useResource } from '@dreipol/t3-api-utils'
import { GridColumn, GridRow } from '@dreipol/t3-react-grid'
import { List, ListItem, Typography } from '@dreipol/t3-ui'

export type LoadOverviewProps = {
  site: string
}


export const LoadOverview = ({site}: LoadOverviewProps) => {
  const data = useResource<{
    status: 'loading' | 'loaded', result: {
      maxRequests: number,
      maxSeconds: number,
      concurrency: number,
      elapsedSeconds: number,
      totalRequests: number,
      totalErrors: number,
      totalTimeSeconds: number,
      maxLatencyMs: number,
      meanLatencyMs: number,
      minLatencyMs: number,
    }|null
  }>({
    url: `/api/load`,
    params: {
      site
    },
    options: {
      shouldRetryOnError: false
    }
  })
  if (data.isLoading || !data || data.data?.status==='loading') {
    return <Typography>Loading...</Typography>
  }

  if (data.error) {
    return <Typography color={'signal.error.main'}>{data.error}</Typography>
  }

  return <GridRow>
    <GridColumn colSpan={12}>
      <List>
        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>maxRequests</Typography>
          <Typography color={'text.primary'} variant={'label'}>{data.data?.result?.maxRequests}</Typography>
        </ListItem>

        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>maxSeconds</Typography>
          <Typography color={'text.primary'} variant={'label'}>{data.data?.result?.maxSeconds}</Typography>
        </ListItem>
        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>elapsedSeconds</Typography>
          <Typography color={'text.primary'} variant={'label'}>{data.data?.result?.elapsedSeconds}</Typography>
        </ListItem>
        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>totalRequests</Typography>
          <Typography color={'text.primary'} variant={'label'}>{data.data?.result?.totalRequests}</Typography>
        </ListItem>
        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>totalErrors</Typography>
          <Typography color={'text.primary'} variant={'label'}>{data.data?.result?.totalErrors}</Typography>
        </ListItem>
        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>totalTimeSeconds</Typography>
          <Typography color={'text.primary'} variant={'label'}>{data.data?.result?.totalTimeSeconds}</Typography>
        </ListItem>
        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>maxLatencyMs</Typography>
          <Typography color={'text.primary'} variant={'label'}>{data.data?.result?.maxLatencyMs}</Typography>
        </ListItem>
        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>meanLatencyMs</Typography>
          <Typography color={'text.primary'} variant={'label'}>{data.data?.result?.meanLatencyMs}</Typography>
        </ListItem>
        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>minLatencyMs</Typography>
          <Typography color={'text.primary'} variant={'label'}>{data.data?.result?.minLatencyMs}</Typography>
        </ListItem>
      </List>
    </GridColumn>
  </GridRow>
}
