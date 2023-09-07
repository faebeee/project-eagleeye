import { getOpenGraphData } from '../../../lib/og/get-open-graph-data'

export const getOgData = async (req: Request) => {
  const {searchParams} = new URL(req.url)
  const siteToScrape = searchParams.get('site')
  if (!siteToScrape) {
    throw new Error('Param not found')
  }

  const result = await getOpenGraphData(siteToScrape!)
  return result
}

export default getOgData
