import axios from 'axios'


const instance = axios.create({
  baseURL: process.env.BACKEND_URL,
  headers: {
    'Authorization': `Bearer ${process.env.API_TOKEN}`
  }
})

export const getAxios = () => {
  return instance
}
