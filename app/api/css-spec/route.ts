import { getFromBackend } from '../../../lib/backend'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const {searchParams} = new URL(request.url)
  const site = searchParams.get('site')!

  const resp = await getFromBackend('/css-spec', {site})
  const res = NextResponse.json(resp.data)
  res.headers.set('Cache-Control', 'private, s-maxage=300')
  return res
}
