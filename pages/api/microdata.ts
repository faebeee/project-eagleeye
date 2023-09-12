import { NextApiHandler } from 'next'
import { getFromBackend } from '../../lib/backend'

export const microdataApi: NextApiHandler = async (req, res) => {
  const resp = await getFromBackend('/microdata', {site: req.query.site as string})
  return res.send(resp.data)
}

export default microdataApi
