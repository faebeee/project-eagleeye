import { useResource } from '@dreipol/t3-api-utils'
import { GridColumn, GridRow } from '@dreipol/t3-react-grid'
import { Typography } from '@dreipol/t3-ui'

export type PageSpeedOverviewProps = {
  site: string
}

export const PageSizeOverview = ({ site }: PageSpeedOverviewProps) => {
  const data = useResource<{ status: 'loading' | 'loaded', result: any }>({
    url: `/api/pagespeed`,
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

  if (data.data?.status === 'loading') {
    return <Typography>Generating...</Typography>
  }

  return <GridRow>
    <GridColumn colSpan={12}>
      <Typography color={'text.secondary'}
        variant={'value'}>{data.data?.result.audits['total-byte-weight'].displayValue}</Typography>
    </GridColumn>
  </GridRow>
}
