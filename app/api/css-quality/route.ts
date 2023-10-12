import { getFromBackend } from '../../../lib/backend'
import { NextResponse } from 'next/server'

export type GetCssQualityResponseResult = {
  id:string;
  score:number;
  value:number;
  actuals?:number[];
}

export type GetCssQualityResponseCategory = {
  score:number;
  violations:GetCssQualityResponseResult[];
  passes:GetCssQualityResponseResult[];
}

export type GetCssQualityResponse = {
  score:number;
  violations:GetCssQualityResponseResult[];
  passes:GetCssQualityResponseResult[];
  performance:GetCssQualityResponseCategory;
  maintainability:GetCssQualityResponseCategory;
  complexity:GetCssQualityResponseCategory;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const site = searchParams.get('site')!

  const resp = await getFromBackend('/css-quality', { site })
  const res = NextResponse.json(resp.data)
  res.headers.set('Cache-Control', 'public, s-maxage=300')
  return res
}
