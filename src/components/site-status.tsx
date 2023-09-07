import { useResource } from '@dreipol/t3-api-utils'
import { Typography } from '@dreipol/t3-ui'
import { useMemo } from 'react'

export type SiteStatusProps = {
  site: string;
}
export const SiteStatus = ({site}: SiteStatusProps) => {
  const data = useResource<{ status: number }>({
    url: '/api/response-check',
    params: {
      site
    }
  })

  const color = useMemo(() => {
    if (data.isLoading || !data.data) {
      return 'text.secondary'
    }

    if (data.data!.status >= 400) {
      return 'signal.error'
    }

    return 'signal.success';
  }, [ data ])

  return <Typography color={color}>{data.data?.status ?? 'Loading...'}</Typography>
}
