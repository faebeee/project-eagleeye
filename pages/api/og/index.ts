import { getOpenGraphData } from '../../../lib/og/get-open-graph-data'
import { NextApiHandler } from 'next'

export const getOgData: NextApiHandler = async (req, res) => {
  const siteToScrape = req.query.site as string
  if (!siteToScrape) {
    throw new Error('Param not found')
  }

  console.log(siteToScrape)

  const result = await getOpenGraphData(siteToScrape!)
  return res.send(result)
}

export default getOgData
