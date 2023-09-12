import { NextApiHandler } from 'next'
import { getFromBackend } from '../../lib/backend'

export const pagespeedApi: NextApiHandler = async (req, res) => {
  const resp = await getFromBackend('/domain', {site: req.query.site as string})
  return res.send(resp.data)
}

export default pagespeedApi
