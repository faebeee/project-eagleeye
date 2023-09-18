import { useResource } from '@dreipol/t3-api-utils'
import { ActionsWrapper, ContextChip, TextLink } from '@dreipol/t3-ui'
import { GridColumn, GridRow } from '@dreipol/t3-react-grid'
import classes from './backend-status-overview.module.css'

export const BackendStatusOverview = () => {
  const data = useResource<{ status: string, version: string }>({url: `/api/status`})

  return <GridRow className={classes.root}>
    <GridColumn colSpan={12}>
      <ActionsWrapper align={'spread'}>
        <ActionsWrapper center>
          <ContextChip color={data.data?.status === 'ok' ? 'signal.success' : 'signal.warning'}
            label={`Backend: ${data.error ?? data.data?.status ?? 'Loading...'}`} />

          <ContextChip label={`BE Version: ${data.data?.version}`} />
        </ActionsWrapper>
        <ActionsWrapper center>
          <TextLink color={'primary'} href={'https://github.com/faebeee/project-eagleeye'} target={'_blank'}>Frontend
            Repo</TextLink>
          <TextLink color={'primary'} href={'https://github.com/faebeee/project-eagleeye-backend'} target={'_blank'}>Backend
            Repo</TextLink>
        </ActionsWrapper>
      </ActionsWrapper>
    </GridColumn>
  </GridRow>
}
