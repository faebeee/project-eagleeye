export const getResponseCheck = async (req: Request) => {
  const {searchParams} = new URL(req.url)
  const siteToScrape = searchParams.get('site')

  const response = await fetch(siteToScrape!)
  if (response.status >= 400) {
    return false
  }
  return true
}

export default getResponseCheck
