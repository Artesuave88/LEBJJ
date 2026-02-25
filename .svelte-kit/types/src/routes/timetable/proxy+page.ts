// @ts-nocheck
import type { PageLoad } from './$types'
import { createSeo } from '$lib/utils/seo'

export const load = () => {
  return {
    seo: createSeo({
      title: 'Timetable',
      description: 'View the full weekly Long Eaton BJJ timetable for adults, kids, teens, ladies, and open mat.',
      path: '/timetable'
    })
  }
}
;null as any as PageLoad;