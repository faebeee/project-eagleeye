import { NextApiHandler } from 'next'

export const getResponseCheck: NextApiHandler = async (req, res) => {
  const siteToScrape = req.query.site as string

  const response = await fetch(siteToScrape!)
  return res.send({status: response.status})
}

export default getResponseCheck
