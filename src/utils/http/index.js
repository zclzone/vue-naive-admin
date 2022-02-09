import axios from 'axios'
import { setupInterceptor } from './interceptors'

function createAxios(option = {}) {
  const defBaseURL = window.__APP__GLOB__CONF__?.VITE_APP_GLOB_BASE_API || import.meta.env.VITE_APP_GLOB_BASE_API
  const service = axios.create({
    timeout: option.timeout || 120000,
    baseURL: option.baseURL || defBaseURL,
  })
  setupInterceptor(service)
  return service
}

export const defAxios = createAxios()

export const testAxios = createAxios({
  baseURL: window.__APP__GLOB__CONF__?.VITE_APP_GLOB_BASE_API_TEST || import.meta.env.VITE_APP_GLOB_BASE_API_TEST,
})
