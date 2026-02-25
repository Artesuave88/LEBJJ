// @ts-nocheck
import type { PageLoad } from './$types'
import { createSeo } from '$lib/utils/seo'

export const load = () => {
  return {
    seo: createSeo({
      title: 'Pricing',
      description: 'Simple Long Eaton BJJ membership options and FAQs to help you choose the right plan.',
      path: '/pricing'
    })
  }
}
;null as any as PageLoad;