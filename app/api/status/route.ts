import { getFromBackend } from '../../../lib/backend'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const resp = await getFromBackend('/health')
  return NextResponse.json({
    ...resp.data
  })
}
