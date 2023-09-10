import { useResource } from '@dreipol/t3-api-utils'
import { Avatar, CheckIcon, CloseIcon } from '@dreipol/t3-ui'
import { ThemeColorVariables } from '@dreipol/t3-react-theme'
import { useMemo } from 'react'

export type ResponseStatusProps = {
  site: string
}
export const ResponseStatus = ({site}: ResponseStatusProps) => {
  const data = useResource<{ status: number }>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/response`, params: {
      site: `${site}`
    }
  })

  const isValid = useMemo(() => {
    return data.data?.status ?? 0 <= 400
  }, [ data ])

  const color = useMemo((): ThemeColorVariables => {
    if (isValid) {
      return 'signal.success'
    }
    return 'signal.error'

  }, [ data.data ])

  if (data.isLoading) {
    return <Avatar color={'neutral.main'} size={'small'}>
    </Avatar>
  }

  return <Avatar color={color as string} size={'small'}>
    {isValid ?
      <CheckIcon color={`${color}.contrast`} />
      :
      <CloseIcon />}
  </Avatar>
}
