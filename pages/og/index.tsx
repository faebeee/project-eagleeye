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
  return (<main>

    </main>
  )
}
export default OGPage
