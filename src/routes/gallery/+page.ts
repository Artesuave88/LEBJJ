import type { PageLoad } from './$types'
import { createSeo } from '$lib/utils/seo'

export const load: PageLoad = () => {
  return {
    seo: createSeo({
      title: 'Gallery',
      description: 'Browse Long Eaton BJJ gallery images from classes, community events, and open mat sessions.',
      path: '/gallery'
    })
  }
}
