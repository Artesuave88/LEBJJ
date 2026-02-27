export const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
] as const

export type WeekDay = (typeof weekDays)[number]
export type Program = 'Adults' | 'Kids' | 'Teens' | 'Ladies' | 'Open Mat' | 'Fitness'
export type GiType = 'Gi' | 'No-Gi' | 'Mixed' | 'Fitness'

export type AudienceFilter = 'All' | 'Adults' | 'Ladies' | 'Juniors' | 'Teens'
export type GiFilter = 'All' | 'Gi' | 'No-Gi' | 'Fitness'

export type TimetableClass = {
  id: string
  day: WeekDay
  start: string
  end: string
  title: string
  program: Program
  gi: GiType
  location?: string
}

const defaultLocation = 'Unit A2 West End Mills'

export const timetableData: TimetableClass[] = [
  {
    id: 'mon-junior-nogi',
    day: 'Monday',
    start: '17:00',
    end: '18:00',
    title: 'Junior No-Gi BJJ',
    program: 'Kids',
    gi: 'No-Gi',
    location: defaultLocation
  },
  {
    id: 'mon-ladies-gi',
    day: 'Monday',
    start: '18:00',
    end: '19:00',
    title: 'Ladies Gi BJJ (16+)',
    program: 'Ladies',
    gi: 'Gi',
    location: defaultLocation
  },
  {
    id: 'mon-all-levels-nogi',
    day: 'Monday',
    start: '19:00',
    end: '20:30',
    title: 'All Levels No-Gi BJJ',
    program: 'Adults',
    gi: 'No-Gi',
    location: defaultLocation
  },
  {
    id: 'tue-junior-gi',
    day: 'Tuesday',
    start: '16:30',
    end: '17:30',
    title: 'Junior Gi BJJ',
    program: 'Kids',
    gi: 'Gi',
    location: defaultLocation
  },
  {
    id: 'tue-teens-gi',
    day: 'Tuesday',
    start: '17:30',
    end: '18:30',
    title: 'Teens Gi BJJ',
    program: 'Teens',
    gi: 'Gi',
    location: defaultLocation
  },
  {
    id: 'tue-all-levels-gi',
    day: 'Tuesday',
    start: '18:30',
    end: '20:00',
    title: 'All Levels Gi BJJ',
    program: 'Adults',
    gi: 'Gi',
    location: defaultLocation
  },
  {
    id: 'wed-teens-nogi',
    day: 'Wednesday',
    start: '17:00',
    end: '18:00',
    title: 'Teens No-Gi BJJ',
    program: 'Teens',
    gi: 'No-Gi',
    location: defaultLocation
  },
  {
    id: 'wed-ladies-gi',
    day: 'Wednesday',
    start: '18:00',
    end: '19:00',
    title: 'Ladies Gi BJJ (16+)',
    program: 'Ladies',
    gi: 'Gi',
    location: defaultLocation
  },
  {
    id: 'wed-all-levels-nogi',
    day: 'Wednesday',
    start: '19:00',
    end: '20:30',
    title: 'All Levels No-Gi BJJ',
    program: 'Adults',
    gi: 'No-Gi',
    location: defaultLocation
  },
  {
    id: 'thu-juniors-gi',
    day: 'Thursday',
    start: '16:30',
    end: '17:30',
    title: 'Juniors Gi BJJ',
    program: 'Kids',
    gi: 'Gi',
    location: defaultLocation
  },
  {
    id: 'thu-teens-gi',
    day: 'Thursday',
    start: '17:30',
    end: '18:30',
    title: 'Teens Gi BJJ',
    program: 'Teens',
    gi: 'Gi',
    location: defaultLocation
  },
  {
    id: 'thu-all-levels-gi',
    day: 'Thursday',
    start: '18:30',
    end: '20:00',
    title: 'All Levels Gi BJJ',
    program: 'Adults',
    gi: 'Gi',
    location: defaultLocation
  },
  {
    id: 'fri-frost-fit',
    day: 'Friday',
    start: '18:15',
    end: '19:15',
    title: 'FrostFit Fitness Circuit',
    program: 'Fitness',
    gi: 'Fitness',
    location: defaultLocation
  },
  {
    id: 'sat-junior-gi',
    day: 'Saturday',
    start: '09:00',
    end: '10:00',
    title: 'Junior Gi BJJ',
    program: 'Kids',
    gi: 'Gi',
    location: defaultLocation
  },
  {
    id: 'sat-teens-gi',
    day: 'Saturday',
    start: '10:00',
    end: '11:00',
    title: 'Teens Gi BJJ',
    program: 'Teens',
    gi: 'Gi',
    location: defaultLocation
  },
  {
    id: 'sat-all-levels-gi',
    day: 'Saturday',
    start: '11:00',
    end: '12:30',
    title: 'All Levels Gi BJJ',
    program: 'Adults',
    gi: 'Gi',
    location: defaultLocation
  },
  {
    id: 'sun-open-mat',
    day: 'Sunday',
    start: '09:00',
    end: '11:00',
    title: 'Open Mat',
    program: 'Open Mat',
    gi: 'Mixed',
    location: defaultLocation
  }
]

function timeToMinutes(time: string): number {
  const [hour, minute] = time.split(':').map((value) => Number.parseInt(value, 10))
  return hour * 60 + minute
}

function pad2(value: number): string {
  return value.toString().padStart(2, '0')
}

export function formatTime(time: string): string {
  const minutes = timeToMinutes(time)
  const hour24 = Math.floor(minutes / 60)
  const minute = minutes % 60
  const suffix = hour24 >= 12 ? 'PM' : 'AM'
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12

  return `${hour12}:${pad2(minute)} ${suffix}`
}

export function classDurationMinutes(item: Pick<TimetableClass, 'start' | 'end'>): number {
  return timeToMinutes(item.end) - timeToMinutes(item.start)
}

export function formatDuration(durationInMinutes: number): string {
  if (durationInMinutes % 60 === 0) {
    const hours = durationInMinutes / 60
    return `${hours} hr${hours === 1 ? '' : 's'}`
  }

  const hours = Math.floor(durationInMinutes / 60)
  const minutes = durationInMinutes % 60

  if (hours === 0) return `${minutes} min`
  return `${hours} hr ${minutes} min`
}

export function matchesAudience(item: TimetableClass, audience: AudienceFilter): boolean {
  if (audience === 'All') return true

  if (audience === 'Adults') {
    return ['Adults', 'Open Mat', 'Fitness'].includes(item.program)
  }

  if (audience === 'Ladies') {
    return item.program === 'Ladies'
  }

  if (audience === 'Juniors') {
    return item.program === 'Kids'
  }

  return item.program === 'Teens'
}

export function matchesGi(item: TimetableClass, giFilter: GiFilter): boolean {
  if (giFilter === 'All') return true
  if (giFilter === 'Gi') return item.gi === 'Gi' || item.gi === 'Mixed'
  if (giFilter === 'Fitness') return item.gi === 'Fitness'
  return item.gi === 'No-Gi' || item.gi === 'Mixed'
}

export function sortByDayAndTime(classes: TimetableClass[]): TimetableClass[] {
  const dayOrder = new Map(weekDays.map((day, index) => [day, index]))

  return [...classes].sort((a, b) => {
    const dayDiff = (dayOrder.get(a.day) ?? 0) - (dayOrder.get(b.day) ?? 0)
    if (dayDiff !== 0) return dayDiff
    return timeToMinutes(a.start) - timeToMinutes(b.start)
  })
}

export function getClassLabelForSelect(item: TimetableClass): string {
  return `${item.day} ${formatTime(item.start)} - ${item.title}`
}
