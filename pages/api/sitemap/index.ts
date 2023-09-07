import { getListOfSites } from '../../../lib/sitemap/get-list-of-sites'

export const getSitemapEntries = async (req: Request) => {
  const {searchParams} = new URL(req.url)
  const url = searchParams.get('site')

  return getListOfSites(`${url!}/sitemap.xml`)
}

export default getSitemapEntries
