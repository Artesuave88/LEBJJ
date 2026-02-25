import type { PageLoad } from './$types'
import { createSeo } from '$lib/utils/seo'

export const load: PageLoad = () => {
  return {
    seo: createSeo({
      title: 'Kids BJJ',
      description: 'A parent-focused overview of our kids and teens BJJ classes, safety standards, and first class expectations.',
      path: '/kids'
    })
  }
}
