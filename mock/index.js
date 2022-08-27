import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import api from './api'

export function setupProdMockServer() {
  createProdMockServer(api)
}
