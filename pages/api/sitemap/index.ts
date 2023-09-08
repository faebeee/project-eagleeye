import { getListOfSites } from '../../../lib/sitemap/get-list-of-sites'
import { NextApiHandler } from 'next'

export const getSitemapEntries: NextApiHandler = async (req, res) => {
  const siteToScrape = req.query.site as string
  const list = await getListOfSites(`${siteToScrape}`)
  return res.send(list)
}

export default getSitemapEntries
