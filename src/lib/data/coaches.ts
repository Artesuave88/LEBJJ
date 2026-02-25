import coachPlaceholder from '$lib/assets/coach-placeholder.svg'

export type Coach = {
  id: string
  name: string
  beltRank: string
  role: string
  shortBio: string
  fullBio: string
  photo: string
}

export const coaches: Coach[] = [
  {
    id: 'paul-thompson',
    name: 'Paul Thompson',
    beltRank: 'Black Belt',
    role: 'Head Coach',
    shortBio: 'Leads fundamentals and adult development with a detail-first teaching style.',
    fullBio:
      'Paul focuses on helping new students feel comfortable quickly while building strong defensive habits. His classes are structured and progressive so every student understands not just what to do, but why it works.',
    photo: coachPlaceholder
  },
  {
    id: 'katie-ward',
    name: 'Katie Ward',
    beltRank: 'Brown Belt',
    role: 'Ladies & Kids Coach',
    shortBio: 'Runs ladies and youth sessions with a calm, confidence-building approach.',
    fullBio:
      'Katie is known for her supportive coaching style and clear communication. She helps children and beginners build confidence through repeatable movement patterns, respect on the mat, and safe sparring habits.',
    photo: coachPlaceholder
  },
  {
    id: 'dan-frost',
    name: 'Dan Frost',
    beltRank: 'Purple Belt',
    role: 'Strength & Conditioning',
    shortBio: 'Coordinates Frost-fit sessions and supports competition prep conditioning.',
    fullBio:
      'Dan delivers practical conditioning for grapplers: grip endurance, movement efficiency, and injury-resilient training. Sessions are designed to complement BJJ classes without overloading recovery.',
    photo: coachPlaceholder
  },
  {
    id: 'elliot-reed',
    name: 'Elliot Reed',
    beltRank: 'Brown Belt',
    role: 'Teens Coach',
    shortBio: 'Helps teens transition from junior classes into all-level sessions smoothly.',
    fullBio:
      'Elliot specializes in bridging fundamentals and live training for teenage students. He emphasizes discipline, safe intensity, and practical techniques that carry over into the adult timetable.',
    photo: coachPlaceholder
  }
]
