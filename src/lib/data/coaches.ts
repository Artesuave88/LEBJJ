import mikeyDeanPhoto from '$lib/assets/coaches/mikey_dean.png';
import sianDeanPhoto from '$lib/assets/coaches/sian_dean.png';
import michaelStevensonPhoto from '$lib/assets/coaches/michael_stevenson.png';
import markKiddPhoto from '$lib/assets/coaches/mark_kidd.png';
import benSmedleyPhoto from '$lib/assets/coaches/ben_smedley.png';
import jamesLewisPhoto from '$lib/assets/coaches/james_lewis.png';

export type instructor = {
  id: string;
  name: string;
  beltRank: string;
  role: string;
  shortBio: string;
  fullBio: string;
  photo: string;
  photoPosition?: string;
}

export const instructors: instructor[] = [
  {
    id: 'mikey-dean',
    name: 'Mikey Dean',
    beltRank: '3rd Degree Black Belt',
    role: 'Head Instructor / Owner',
    shortBio:
      'Head instructor leading fundamentals and long-term student development.',
    fullBio:
      'Mikey leads the instruction at Long Eaton BJJ, with a strong focus on technical detail, clear progression, and high standards on and off the mat.',
    photo: mikeyDeanPhoto
  },

  {
    id: 'michael-stevenson',
    name: 'Michael Stevenson',
    beltRank: '2nd Degree Black Belt',
    role: 'Instructor',
    shortBio:
      'Supports adult and developing students with structured, practical instruction.',
    fullBio:
      'Michael brings a technical and supportive approach to instruction, helping students sharpen fundamentals while building confidence in live training.',
    photo: michaelStevensonPhoto,
    photoPosition: 'center top'
  },

  {
    id: 'mark-kidd',
    name: 'Mark Kidd',
    beltRank: '2nd Degree Black Belt',
    role: 'Instructor',
    shortBio:
      'Experienced black belt supporting technical development across classes.',
    fullBio:
      'Mark brings years of grappling experience and helps students sharpen core jiu-jitsu fundamentals with clear, practical instruction.',
    photo: markKiddPhoto,
    photoPosition: 'center top'
  },
  {
    id: 'ben-smedley',
    name: 'Ben Smedley',
    beltRank: '2nd Degree Black Belt',
    role: 'Instructor',
    shortBio:
      'Ben focuses on our juniors team, building confidence and technique in young athletes.',
    fullBio:
      'Ben leads our juniors team, helping young athletes develop strong fundamentals, confidence, and a love for the sport in a supportive environment.',
    photo: benSmedleyPhoto,
    photoPosition: 'right top'
  },
  {
    id: 'james-lewis',
    name: 'James Lewis',
    beltRank: '1st Degree Black Belt',
    role: 'Instructor',
    shortBio:
      'Supports the junior and teens program with practical instruction focused on fundamentals and live application.',
    fullBio:
      'James brings a practical and technical instruction style, helping students develop strong fundamentals and apply them effectively in live training.',
    photo: jamesLewisPhoto,
    photoPosition: 'center top'
  },
  {
    id: 'sian-dean',
    name: 'Sian Dean',
    beltRank: 'Purple Belt',
    role: 'Instructor',
    shortBio:
      'Teaches juniors and ladies classes with clear, supportive instruction.',
    fullBio:
      'Sian teaches juniors and ladies classes, helping students build strong fundamentals, confidence, and safe training habits in every session.',
    photo: sianDeanPhoto,
    photoPosition: 'center top'
  }
]
