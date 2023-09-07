import ogs from 'open-graph-scraper'
import { NextResponse } from 'next/server'

export const getOpenGraphData = async (url:string) => {
  const options = {url}
  const result = await ogs(options)

  if(result.error) {
    throw result.error;
  }

  return result.result;

}
