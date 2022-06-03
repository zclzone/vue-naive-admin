import axios from 'axios'
import { repReject, repResolve, reqReject, reqResolve } from './interceptors'

export function createAxios(options = {}) {
  const defaultOptions = {
    baseURL: window.__APP__GLOB__CONF__?.VITE_APP_GLOB_BASE_API || import.meta.env.VITE_APP_GLOB_BASE_API,
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

export const defAxios = createAxios()

export const testAxios = createAxios({
  baseURL: window.__APP__GLOB__CONF__?.VITE_APP_GLOB_BASE_API_TEST || import.meta.env.VITE_APP_GLOB_BASE_API_TEST,
})
