// @ts-nocheck
import type { PageLoad } from './$types'
import { createSeo } from '$lib/utils/seo'

export const load = () => {
  return {
    seo: createSeo({
      title: 'Contact',
      description: 'Get in touch with Long Eaton BJJ, view address and opening times, and send us a message.',
      path: '/contact'
    })
  }
}
;null as any as PageLoad;