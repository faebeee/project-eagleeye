import { PropsWithChildren, useState } from 'react'
import { Button } from '@dreipol/t3-ui'

export type ShowOnRequestProps = PropsWithChildren<{
  showInitial?: boolean;
}>

export const ShowOnRequest = ({showInitial = false, children}: ShowOnRequestProps) => {
  const [ show, setShow ] = useState(showInitial)
  if (show) {
    return <>{children}</>
  }

  return <div>
    <Button color={'primary'} onClick={() => setShow(true)}>
      Load
    </Button>
  </div>
}
