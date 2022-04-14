import { createSessionStorage } from '@/utils/cache'

export const tagsSS = createSessionStorage({ prefixKey: 'tag_' })
export const activeTag = tagsSS.get('activeTag')
export const tags = tagsSS.get('tags')

export const WITHOUT_TAG_PATHS = ['/404', '/login', '/redirect']
