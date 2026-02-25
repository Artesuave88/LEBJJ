import image1 from '$lib/assets/gallery-1.svg'
import image2 from '$lib/assets/gallery-2.svg'
import image3 from '$lib/assets/gallery-3.svg'
import image4 from '$lib/assets/gallery-4.svg'
import image5 from '$lib/assets/gallery-5.svg'
import image6 from '$lib/assets/gallery-6.svg'

export type GalleryItem = {
  id: string
  src: string
  alt: string
  caption: string
}

export const galleryItems: GalleryItem[] = [
  { id: 'drilling', src: image1, alt: 'BJJ drilling class', caption: 'Technical drilling sessions' },
  { id: 'kids', src: image2, alt: 'Kids BJJ class', caption: 'Structured kids classes' },
  { id: 'sparring', src: image3, alt: 'Live sparring rounds', caption: 'Controlled sparring rounds' },
  { id: 'team-photo', src: image4, alt: 'Team photo at the gym', caption: 'Community-first gym culture' },
  { id: 'competition', src: image5, alt: 'Competition-focused training', caption: 'Competition team preparation' },
  { id: 'open-mat', src: image6, alt: 'Sunday open mat training', caption: 'Sunday open mat sessions' }
]
