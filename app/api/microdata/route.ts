import { getFromBackend } from '../../../lib/backend'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const {searchParams} = new URL(request.url)
  const site = searchParams.get('site')!

  const resp = await getFromBackend('/microdata', {site})
  return NextResponse.json(resp.data)
}
