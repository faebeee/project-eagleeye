import { useResource } from '@dreipol/t3-api-utils'
import { useMemo } from 'react'
import { GridColumn, GridRow } from '@dreipol/t3-react-grid'
import { ActionsWrapper, ContextChip, List, ListItem, Typography } from '@dreipol/t3-ui'

export type CssOverviewProps = {
  site: string
}

export const CssOverview = ({ site }: CssOverviewProps) => {
  const data = useResource<any>({
    url: `/api/css-spec`, params: {
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
          <Typography color={'text.secondary'} variant={'label2'}>Size</Typography>
          <Typography color={'text.primary'} variant={'label'}>{data.data?.humanizedSize}</Typography>
        </ListItem>

        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>GZip Size</Typography>
          <Typography color={'text.primary'} variant={'label'}>{data.data?.humanizedGzipSize}</Typography>
        </ListItem>

        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>MediaQueries</Typography>
          <Typography color={'text.primary'} variant={'label'}>{data.data?.mediaQueries.total}</Typography>
        </ListItem>

        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>Selectors</Typography>
          <Typography color={'text.primary'} variant={'label'}>{data.data?.selectors.total}</Typography>
        </ListItem>

        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>Rules</Typography>
          <Typography color={'text.primary'} variant={'label'}>{data.data?.rules.total}</Typography>
        </ListItem>

        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>Declarations</Typography>
          <Typography color={'text.primary'} variant={'label'}>{data.data?.declarations.total}</Typography>
        </ListItem>

        <ListItem>
          <Typography color={'text.secondary'} variant={'label2'}>Specificity</Typography>
          <ActionsWrapper>
            <ContextChip color={'secondary'}>
              avg: {Math.round(data.data?.selectors.specificity.average ?? 0)}
            </ContextChip>

            <ContextChip color={'secondary'}>
              max: {data.data?.selectors.specificity.max}
            </ContextChip>
          </ActionsWrapper>
        </ListItem>
      </List>
    </GridColumn>
  </GridRow>
}
