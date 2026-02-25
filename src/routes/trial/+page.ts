import type { PageLoad } from './$types'
import { createSeo } from '$lib/utils/seo'

export const load: PageLoad = () => {
  return {
    seo: createSeo({
      title: 'Book a Free Trial',
      description: 'Book your free trial class at Long Eaton BJJ and choose a timetable slot that suits you.',
      path: '/trial'
    })
  }
}
