import { useResource } from '@dreipol/t3-api-utils'
import { GridColumn, GridRow } from '@dreipol/t3-react-grid'
import { TextField, Typography } from '@dreipol/t3-ui'

export type WhoisOverviewProps = {
  site: string
}

export const WhoisOverview = ({site}: WhoisOverviewProps) => {
  const data = useResource<{ whois: string }>({
    url: `/api/domain`, params: {
      site
    }
  })


  return <GridRow>
    <GridColumn colSpan={12}>
      <Typography><span dangerouslySetInnerHTML={{__html: data.data?.whois.replaceAll('\n', '<br/>') ?? ''}}></span>
      </Typography>
    </GridColumn>
  </GridRow>
}
