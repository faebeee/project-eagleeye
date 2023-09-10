import { NextApiHandler } from 'next'
import { getFromBackend } from '../../lib/backend'

export const cssSpecApi: NextApiHandler = async (req, res) => {
  const resp = await getFromBackend('/css-spec', {site: req.query.site as string})
  return res.send(resp.data)
}

export default cssSpecApi
