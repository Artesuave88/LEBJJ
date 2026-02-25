export type Testimonial = {
  id: string
  name: string
  type: 'Student' | 'Parent'
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'tom',
    name: 'Tom R.',
    type: 'Student',
    quote: 'Started as a total beginner. The coaching is clear, structured, and genuinely welcoming.'
  },
  {
    id: 'ashley',
    name: 'Ashley P.',
    type: 'Parent',
    quote: 'My son has grown in confidence massively. The kids classes are organised and supportive.'
  },
  {
    id: 'james',
    name: 'James M.',
    type: 'Student',
    quote: 'Great mix of fundamentals and live rounds. You always leave class with a clear focus.'
  },
  {
    id: 'nicola',
    name: 'Nicola B.',
    type: 'Parent',
    quote: 'Excellent coaching standards and a safe environment. Communication with parents is very good.'
  },
  {
    id: 'ryan',
    name: 'Ryan K.',
    type: 'Student',
    quote: 'No-Gi and Gi timetable is ideal. Plenty of sessions to train around work.'
  },
  {
    id: 'georgia',
    name: 'Georgia L.',
    type: 'Student',
    quote: 'The ladies sessions are friendly and technical. Brilliant place to build confidence quickly.'
  }
]
