import { useResource } from '@dreipol/t3-api-utils'
import { useMemo } from 'react'
import { GridColumn, GridRow } from '@dreipol/t3-react-grid'
import { ActionsWrapper, ContextChip, List, ListItem, Typography } from '@dreipol/t3-ui'
import { GetCssQualityResponse } from '../../../app/api/css-quality/route'

export type CssOverviewProps = {
  site: string
}

export const CssQualityOverview = ({ site }: CssOverviewProps) => {
  const data = useResource<GetCssQualityResponse>({
    url: `/api/css-quality`, params: {
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
          <Typography color={'text.secondary'} variant={'label2'}>Performance</Typography>
          <Typography color={'text.primary'} variant={'label2'}>
            <ActionsWrapper>
              <ContextChip color={'secondary'}>Score: {data.data?.performance.score}</ContextChip>
              {(data.data?.performance.violations.length ?? 0) > 0 && <ContextChip
                color={'signal.error'}>Violations: {data.data?.performance.violations.length}</ContextChip>}
            </ActionsWrapper>
          </Typography>
        </ListItem>

        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>Maintainability</Typography>
          <Typography color={'text.primary'} variant={'label2'}>
            <ActionsWrapper>
              <ContextChip color={'secondary'}>Score: {data.data?.maintainability.score}</ContextChip>
              {(data.data?.maintainability.violations.length ?? 0) > 0 && <ContextChip
                color={'signal.error'}>Violations: {data.data?.maintainability.violations.length}</ContextChip>}
            </ActionsWrapper>
          </Typography>
        </ListItem>

        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>Complexity</Typography>
          <Typography color={'text.primary'} variant={'label2'}>
            <ActionsWrapper>
              <ContextChip color={'secondary'}>Score: {data.data?.complexity.score}</ContextChip>
              {(data.data?.complexity.violations.length ?? 0) > 0 && <ContextChip
                color={'signal.error'}>Violations: {data.data?.complexity.violations.length}</ContextChip>}
            </ActionsWrapper>
          </Typography>
        </ListItem>
      </List>

      <Typography variant={'listTitle'}>Violations</Typography>
      <List>
        {data.data?.violations.map((violation) => (<ListItem key={violation.id}>
          <Typography color={'text.secondary'} variant={'label2'}>{violation.id}</Typography>
          <ActionsWrapper>
            <ContextChip color={'signal.error'}>Score: {violation.value}</ContextChip>
          </ActionsWrapper>
        </ListItem>))}
      </List>
    </GridColumn>
  </GridRow>
}
