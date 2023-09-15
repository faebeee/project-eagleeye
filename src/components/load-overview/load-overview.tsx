import { useResource } from '@dreipol/t3-api-utils'
import { GridColumn, GridRow } from '@dreipol/t3-react-grid'
import { List, ListItem, Typography } from '@dreipol/t3-ui'

export type LoadOverviewProps = {
  site: string
}


export const LoadOverview = ({site}: LoadOverviewProps) => {
  const data = useResource<{
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
  }>({
    url: `/api/load`,
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
        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>maxRequests</Typography>
          <Typography color={'text.primary'} variant={'label'}>{data.data?.maxRequests}</Typography>
        </ListItem>

        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>maxSeconds</Typography>
          <Typography color={'text.primary'} variant={'label'}>{data.data?.maxSeconds}</Typography>
        </ListItem>
        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>elapsedSeconds</Typography>
          <Typography color={'text.primary'} variant={'label'}>{data.data?.elapsedSeconds}</Typography>
        </ListItem>
        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>totalRequests</Typography>
          <Typography color={'text.primary'} variant={'label'}>{data.data?.totalRequests}</Typography>
        </ListItem>
        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>totalErrors</Typography>
          <Typography color={'text.primary'} variant={'label'}>{data.data?.totalErrors}</Typography>
        </ListItem>
        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>totalTimeSeconds</Typography>
          <Typography color={'text.primary'} variant={'label'}>{data.data?.totalTimeSeconds}</Typography>
        </ListItem>
        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>maxLatencyMs</Typography>
          <Typography color={'text.primary'} variant={'label'}>{data.data?.maxLatencyMs}</Typography>
        </ListItem>
        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>meanLatencyMs</Typography>
          <Typography color={'text.primary'} variant={'label'}>{data.data?.meanLatencyMs}</Typography>
        </ListItem>
        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>minLatencyMs</Typography>
          <Typography color={'text.primary'} variant={'label'}>{data.data?.minLatencyMs}</Typography>
        </ListItem>
      </List>
    </GridColumn>
  </GridRow>
}
