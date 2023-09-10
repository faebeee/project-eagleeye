import { NextApiHandler } from 'next'
import { getFromBackend } from '../../lib/backend'

export const responseApi: NextApiHandler = async (req, res) => {
  const resp = await getFromBackend('/response', {site: req.query.site as string})
  return res.send(resp.data)
}

export default responseApi
