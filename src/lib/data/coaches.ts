import coachPlaceholder from '$lib/assets/coach-placeholder.svg';

export type Coach = {
  id: string;
  name: string;
  beltRank: string;
  role: string;
  shortBio: string;
  fullBio: string;
  photo: string;
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
    photo: coachPlaceholder,
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
    photo: coachPlaceholder,
  },
];
