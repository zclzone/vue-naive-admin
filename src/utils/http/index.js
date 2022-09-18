import axios from 'axios'
import { repReject, repResolve, reqReject, reqResolve } from './interceptors'

export function createAxios(options = {}) {
  const defaultOptions = {
    timeout: 12000,
  }
  const service = axios.create({
    ...defaultOptions,
    ...options,
  })
  service.interceptors.request.use(reqResolve, reqReject)
  service.interceptors.response.use(repResolve, repReject)
  return service
}

export const request = createAxios({
  baseURL: import.meta.env.VITE_BASE_API,
})
