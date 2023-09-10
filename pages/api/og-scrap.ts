import { NextApiHandler } from 'next'
import { getFromBackend } from '../../lib/backend'

export const ogScrapApi: NextApiHandler = async (req, res) => {
  const resp = await getFromBackend('/og-scrap', {site: req.query.site as string})
  return res.send(resp.data)
}

export default ogScrapApi
