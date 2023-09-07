import { GetServerSideProps } from 'next'
import { getOpenGraphData } from '../../lib/og/get-open-graph-data'
import { GridColumn, GridRow } from '@dreipol/t3-react-grid'
import { Typography } from '@dreipol/t3-ui'

export const getServerSideProps: GetServerSideProps = async (req) => {
  if (!req.query!.site) {
    return {
      notFound: true
    }
  }
  const result = await getOpenGraphData(req.query!.site! as string)
  return {
    props: {
      result
    }
  }
}

export type OGPageProps = {
  result: Awaited<ReturnType<typeof getOpenGraphData>>
}

export const OGPage = ({result}: OGPageProps) => {
  console.log(result)
  return (<main>
      <GridRow>
        <GridColumn colSpan={12}>
          <GridRow>
            <GridColumn colSpan={4}>
              <Typography variant={'label'}>og:image</Typography>
            </GridColumn>
            <GridColumn colSpan={4}>
              <img width={400} src={result.ogImage![0].url} alt={'og image'} />
            </GridColumn>
          </GridRow>

          <GridRow>
            <GridColumn colSpan={4}>
              <Typography variant={'label'}>og:sitename</Typography>
            </GridColumn>
            <GridColumn colSpan={4}>
              <Typography>{result.ogSiteName}</Typography>
            </GridColumn>
          </GridRow>

          <GridRow>
            <GridColumn colSpan={4}>
              <Typography variant={'label'}>og:description</Typography>
            </GridColumn>
            <GridColumn colSpan={4}>
              <Typography>{result.ogDescription}</Typography>
            </GridColumn>
          </GridRow>

          <GridRow>
            <GridColumn colSpan={4}>
              <Typography variant={'label'}>og:ogType</Typography>
            </GridColumn>
            <GridColumn colSpan={4}>
              <Typography>{result.ogType}</Typography>
            </GridColumn>
          </GridRow>

          <GridRow>
            <GridColumn colSpan={4}>
              <Typography variant={'label'}>og:title</Typography>
            </GridColumn>
            <GridColumn colSpan={4}>
              <Typography>{result.ogTitle}</Typography>
            </GridColumn>
          </GridRow>
        </GridColumn>
      </GridRow>
    </main>
  )
}
export default OGPage
