import { Button, TextField } from '@dreipol/t3-ui'
import { GridColumn, GridRow } from '@dreipol/t3-react-grid'
import { useState } from 'react'
import Link from 'next/link'

export const MainPage = () => {
  const [ url, setUrl ] = useState('')
  return (<main>
      <GridRow>
        <GridColumn colSpan={12}>
          <TextField
            value={url}
            onChange={(val) => setUrl(val)}
            label={'URL'} placeholder={'https://example.com/my-path'} />
        </GridColumn>

        <GridColumn colSpan={4}>
          <Link href={`/og?site=${url}`}>
            <Button>Open Graph Check</Button>
          </Link>
        </GridColumn>

        <GridColumn colSpan={4}>
          <Link href={`/sitemap?site=${url}`}>
            <Button>Inspect sitemap</Button>
          </Link>
        </GridColumn>
      </GridRow>
    </main>
  )
}
export default MainPage
