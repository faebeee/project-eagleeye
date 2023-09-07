import { GetServerSideProps } from 'next'
import { GridColumn, GridRow } from '@dreipol/t3-react-grid'
import { Typography } from '@dreipol/t3-ui'
import { getListOfSites } from '../../lib/sitemap/get-list-of-sites'
import { SiteStatus } from '../../src/components/site-status'

export const getServerSideProps: GetServerSideProps = async (req) => {
  if (!req.query!.site) {
    return {
      notFound: true
    }
  }
  const sites = await getListOfSites(`${req.query!.site! as string}/sitemap.xml`)
  return {
    props: {
      sites
    }
  }
}

export type SitemapPageProps = {
  sites: Awaited<ReturnType<typeof getListOfSites>>
}

export const SitemapPage = ({sites}: SitemapPageProps) => {
  return (<main>
      <GridRow>
        <GridColumn colSpan={12}>
          <GridRow>
            {sites.map((site) => (
              <GridColumn colSpan={12} key={site}>
                <GridRow>
                  <GridColumn colSpan={8}>
                    <Typography variant={'label'}>{site}</Typography>
                  </GridColumn>
                  <GridColumn colSpan={4}>
                    <SiteStatus site={site} />
                  </GridColumn>
                </GridRow>
              </GridColumn>))}
          </GridRow>
        </GridColumn>
      </GridRow>
    </main>
  )
}
export default SitemapPage
