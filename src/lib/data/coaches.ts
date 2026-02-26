import coachPlaceholder from '$lib/assets/coach-placeholder.svg';
import mikeyDeanPhoto from '$lib/assets/coaches/mikey_dean.png';
import sianDeanPhoto from '$lib/assets/coaches/sian_dean.png';
import michaelStevensonPhoto from '$lib/assets/coaches/michael_stevenson.png';

export type Coach = {
  id: string;
  name: string;
  beltRank: string;
  role: string;
  shortBio: string;
  fullBio: string;
  photo: string;
  photoPosition?: string;
};

export const coaches: Coach[] = [
  {
    id: 'mikey-dean',
    name: 'Mikey Dean',
    beltRank: '3rd Degree Black Belt',
    role: 'Head Coach',
    shortBio:
      'Head coach leading fundamentals and long-term student development.',
    fullBio:
      'Mikey leads the coaching direction at Long Eaton BJJ, with a strong focus on technical detail, clear progression, and high standards on and off the mat.',
    photo: mikeyDeanPhoto,
  },

  {
    id: 'michael-stevenson',
    name: 'Michael Stevenson',
    beltRank: '2nd Degree Black Belt',
    role: 'Coach',
    shortBio:
      'Supports adult and developing students with structured, practical coaching.',
    fullBio:
      'Michael brings a technical and supportive approach to coaching, helping students sharpen fundamentals while building confidence in live training.',
    photo: michaelStevensonPhoto,
    photoPosition: 'center top',
  },
  {
    id: 'sian-dean',
    name: 'Sian Dean',
    beltRank: 'Purple Belt',
    role: 'Coach',
    shortBio:
      'Teaches juniors and ladies classes with clear, supportive instruction.',
    fullBio:
      'Sian teaches juniors and ladies classes, helping students build strong fundamentals, confidence, and safe training habits in every session.',
    photo: sianDeanPhoto,
    photoPosition: 'center top',
  },
];
