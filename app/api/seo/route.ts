import { NextResponse } from 'next/server'
import { getFromBackend } from '../../../lib/backend'

export async function GET(request: Request) {
  const {searchParams} = new URL(request.url)
  const site = searchParams.get('site')!

  const resp = await getFromBackend('/seo', {site})
  const res = NextResponse.json(resp.data)
  res.headers.set('Cache-Control', 'public, s-maxage=300')
  return res
}
