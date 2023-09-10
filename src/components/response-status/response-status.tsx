import { useResource } from '@dreipol/t3-api-utils'
import { Avatar, CheckIcon, CloseIcon } from '@dreipol/t3-ui'
import { ThemeColorVariables } from '@dreipol/t3-react-theme'
import { useMemo } from 'react'

export type ResponseStatusProps = {
  site: string
}
export const ResponseStatus = ({site}: ResponseStatusProps) => {
  const data = useResource<{ status: number }>({
    url: `/api/response`,
    params: {
      site: `${site}`
    },
    options: {
      refreshInterval: 0,
      errorRetryInterval: 0,
      revalidateOnFocus:false,
      shouldRetryOnError:false,
      errorRetryCount: 0
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

  return <Avatar color={color as string} size={'small'} title={data.data?.status.toString()}>
    {isValid ?
      <CheckIcon color={`${color}.contrast`} />
      :
      <CloseIcon />}
  </Avatar>
}
