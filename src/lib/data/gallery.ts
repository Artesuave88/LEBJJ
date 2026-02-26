import image1 from '$lib/assets/gallery-1.svg';
import image2 from '$lib/assets/gallery-2.svg';
import image3 from '$lib/assets/gallery-3.svg';
import image4 from '$lib/assets/gallery-4.svg';
import image5 from '$lib/assets/gallery-5.svg';
import image6 from '$lib/assets/gallery-6.svg';

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  objectPosition?: string;
};

const fallbackGalleryItems: GalleryItem[] = [
  {
    id: 'drilling',
    src: image1,
    alt: 'BJJ drilling class',
    caption: 'Technical drilling sessions',
  },
  {
    id: 'kids',
    src: image2,
    alt: 'Kids BJJ class',
    caption: 'Structured kids classes',
  },
  {
    id: 'sparring',
    src: image3,
    alt: 'Live sparring rounds',
    caption: 'Controlled sparring rounds',
  },
  {
    id: 'team-photo',
    src: image4,
    alt: 'Team photo at the gym',
    caption: 'Community-first gym culture',
  },
  {
    id: 'competition',
    src: image5,
    alt: 'Competition-focused training',
    caption: 'Competition team preparation',
  },
  {
    id: 'open-mat',
    src: image6,
    alt: 'Sunday open mat training',
    caption: 'Sunday open mat sessions',
  },
];

const galleryImageModules = import.meta.glob(
  '/src/lib/assets/gallery/*.{png,jpg,jpeg,webp,avif}',
  {
    eager: true,
    import: 'default',
  },
) as Record<string, string>;

const galleryMetaOverrides: Record<
  string,
  Partial<Pick<GalleryItem, 'caption' | 'alt' | 'objectPosition'>>
> = {
  'LEBJJ-25-JMP-012': {
    caption: 'Juniors Class Coaching',
    alt: 'Coach guiding two junior students through a ground position drill',
  },
  'LEBJJ-25-JMP-013': {
    caption: 'Kids Sparring Session',
    alt: 'Coach supervising two junior students during controlled sparring',
  },
  'LE-BJJ-24-JM-030': {
    caption: 'Coach Photo ',
    alt: 'Long Eaton BJJ coaches posing for a group photo in the gym',
  },
  'LEBJJ-25-JMP-171': {
    caption: 'Family-Friendly Gym Culture',
    alt: 'Two coaches and two junior students posing together in the academy',
  },
};

function toSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function toCaptionFromFilename(fileStem: string): string {
  return fileStem
    .split(/[-_]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const discoveredGalleryItems: GalleryItem[] = Object.entries(
  galleryImageModules,
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => {
    const fileName = path.split('/').at(-1) ?? '';
    const fileStem = fileName.replace(/\.[^.]+$/, '');
    const fallbackCaption = toCaptionFromFilename(fileStem);
    const override = galleryMetaOverrides[fileStem] ?? {};

    return {
      id: toSlug(fileStem),
      src,
      caption: override.caption ?? fallbackCaption,
      alt: override.alt ?? `${fallbackCaption} at Long Eaton BJJ`,
      objectPosition: override.objectPosition,
    };
  });

export const galleryItems: GalleryItem[] =
  discoveredGalleryItems.length > 0
    ? discoveredGalleryItems
    : fallbackGalleryItems;
