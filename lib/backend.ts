import { getAxios } from './get-axios'

export const getFromBackend = (path: string, params: Record<string, string>) => {
  return getAxios().get(path, {params})
}
