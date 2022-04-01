import { createWebStorage } from './web-storage'

export const createLocalStorage = function (option = {}) {
  return createWebStorage({ prefixKey: option.prefixKey || '', storage: localStorage })
}

export const createSessionStorage = function (option = {}) {
  return createWebStorage({ prefixKey: option.prefixKey || '', storage: sessionStorage })
}
