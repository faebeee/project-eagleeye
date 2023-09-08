import getCss from 'get-css'
import cssstats from 'cssstats'

export const cssSpec = async (site: string) => {
  const css = await getCss(site);
  const singleCssContent = css.links.map((link:{css:string}) => link.css).join(' ');
  const stats = cssstats(singleCssContent)
  return stats

}
