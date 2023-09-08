import { NextApiHandler } from 'next'
import { cssSpec } from '../../../lib/css-spec/css-spec'

export const getCssSpecHandler: NextApiHandler = async (req, res) => {
  const siteToScrape = req.query.site as string
  if (!siteToScrape) {
    throw new Error('Param not found')
  }

  const result = await cssSpec(siteToScrape)
  res.send(result)
}

export default getCssSpecHandler
