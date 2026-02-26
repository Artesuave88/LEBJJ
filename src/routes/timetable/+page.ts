import type { PageLoad } from './$types'
import { createRouteSeo } from '$lib/utils/seo'

export const load: PageLoad = () => {
  return {
    seo: createRouteSeo('/timetable')
  }
}
