// @ts-ignore
import SitemapXMLParser from 'sitemap-xml-parser'
import { SitemapSiteEntry } from './sitemap'

export const getListOfSites = async (url: string): Promise<string[]> => {
  const options = {
    delay: 3000,
    limit: 5
  }

  try {
    const sitemapXMLParser = new SitemapXMLParser(url, options)

    const result = (await sitemapXMLParser.fetch()) as SitemapSiteEntry[]
    return result.map((r) => r.loc[0])
  }catch(e) {
    return []
  }
}
