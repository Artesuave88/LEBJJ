// @ts-nocheck
import type { PageLoad } from './$types'
import { SITE_DESCRIPTION, SITE_NAME } from '$lib/config/site'
import { createSeo } from '$lib/utils/seo'

export const load = () => {
  return {
    seo: createSeo({
      title: SITE_NAME,
      description: SITE_DESCRIPTION,
      path: '/'
    })
  }
}
;null as any as PageLoad;