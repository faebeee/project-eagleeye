import getCss from 'get-css'
import cssstats from 'cssstats'

export const cssSpec = async (site: string) => {
  console.log(site);
  const css = await getCss(site);
  const singleCssContent = css.links.map((link) => link.css).join(' ');
  const stats = cssstats(singleCssContent)
  return stats

}
