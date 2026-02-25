// @ts-nocheck
import type { PageLoad } from './$types'
import { createSeo } from '$lib/utils/seo'

export const load = () => {
  return {
    seo: createSeo({
      title: 'Coaches',
      description: 'Meet the Long Eaton BJJ coaching team and learn about their approach to development.',
      path: '/coaches'
    })
  }
}
;null as any as PageLoad;