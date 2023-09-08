import psi from 'psi'


export const pageSpeed = async (site: string) => {
  const {data} = await psi(site, {strategy:'desktop'})
  return data.lighthouseResult.categories

}
