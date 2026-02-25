export type Membership = {
  id: string
  name: string
  price: string
  description: string
  features: string[]
  ctaLabel: string
}

export const memberships: Membership[] = [
  {
    id: 'beginner-trial',
    name: 'Beginner Trial',
    price: '£XX',
    description: 'A low-commitment start for new students.',
    features: [
      'Intro-friendly class access',
      'Coach guidance before first session',
      'Perfect for complete beginners'
    ],
    ctaLabel: 'Start Trial'
  },
  {
    id: 'monthly-unlimited',
    name: 'Monthly Unlimited',
    price: '£XX / month',
    description: 'Train across the full weekly timetable.',
    features: [
      'Unlimited adults classes',
      'Gi and No-Gi sessions',
      'Open mat access included'
    ],
    ctaLabel: 'Join Unlimited'
  },
  {
    id: 'kids-membership',
    name: 'Kids Membership',
    price: '£XX / month',
    description: 'Structured youth training in a safe setting.',
    features: ['Junior + teens classes', 'Progressive curriculum', 'Supportive learning environment'],
    ctaLabel: 'Enquire Kids'
  }
]

export const pricingFaqs = [
  {
    question: 'Do I need any experience before joining?',
    answer: 'No experience is required. Our beginner trial is designed for first-time students.'
  },
  {
    question: 'Can I attend both Gi and No-Gi classes?',
    answer: 'Yes. Monthly memberships can include both Gi and No-Gi timetable options.'
  },
  {
    question: 'Are there contracts?',
    answer: 'Membership terms can vary. Contact us and we will explain your options clearly.'
  },
  {
    question: 'What if I am only interested in kids classes?',
    answer: 'The kids membership is tailored for juniors and teens with age-appropriate sessions.'
  }
]
