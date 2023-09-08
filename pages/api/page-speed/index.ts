import { NextApiHandler } from 'next'
import { pageSpeed } from '../../../lib/page-speed/page-speed'

export const getPageSpeed: NextApiHandler = async (req, res) => {
  const siteToScrape = req.query.site as string
  if (!siteToScrape) {
    throw new Error('Param not found')
  }

  const result = await pageSpeed(siteToScrape!)
  return res.send(result)
}

export default getPageSpeed
