const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
const defaultLocation = "Unit A2 West End Mills";
const timetableData = [
  {
    id: "mon-junior-nogi",
    day: "Monday",
    start: "17:00",
    end: "18:00",
    title: "Junior No-Gi BJJ",
    program: "Kids",
    gi: "No-Gi",
    location: defaultLocation
  },
  {
    id: "mon-ladies-gi",
    day: "Monday",
    start: "18:00",
    end: "19:00",
    title: "Ladies Gi BJJ (16+)",
    program: "Ladies",
    gi: "Gi",
    location: defaultLocation
  },
  {
    id: "mon-all-levels-nogi",
    day: "Monday",
    start: "19:00",
    end: "20:30",
    title: "All Levels No-Gi BJJ",
    program: "Adults",
    gi: "No-Gi",
    location: defaultLocation
  },
  {
    id: "tue-junior-gi",
    day: "Tuesday",
    start: "16:30",
    end: "17:30",
    title: "Junior Gi BJJ",
    program: "Kids",
    gi: "Gi",
    location: defaultLocation
  },
  {
    id: "tue-teens-gi",
    day: "Tuesday",
    start: "17:30",
    end: "18:30",
    title: "Teens Gi BJJ",
    program: "Teens",
    gi: "Gi",
    location: defaultLocation
  },
  {
    id: "tue-all-levels-gi",
    day: "Tuesday",
    start: "18:30",
    end: "20:00",
    title: "All Levels Gi BJJ",
    program: "Adults",
    gi: "Gi",
    location: defaultLocation
  },
  {
    id: "wed-teens-nogi",
    day: "Wednesday",
    start: "17:00",
    end: "18:00",
    title: "Teens No-Gi BJJ",
    program: "Teens",
    gi: "No-Gi",
    location: defaultLocation
  },
  {
    id: "wed-ladies-gi",
    day: "Wednesday",
    start: "18:00",
    end: "19:00",
    title: "Ladies Gi BJJ (16+)",
    program: "Ladies",
    gi: "Gi",
    location: defaultLocation
  },
  {
    id: "wed-all-levels-nogi",
    day: "Wednesday",
    start: "19:00",
    end: "20:30",
    title: "All Levels No-Gi BJJ",
    program: "Adults",
    gi: "No-Gi",
    location: defaultLocation
  },
  {
    id: "thu-juniors-gi",
    day: "Thursday",
    start: "16:30",
    end: "17:30",
    title: "Juniors Gi BJJ",
    program: "Kids",
    gi: "Gi",
    location: defaultLocation
  },
  {
    id: "thu-teens-gi",
    day: "Thursday",
    start: "17:30",
    end: "18:30",
    title: "Teens Gi BJJ",
    program: "Teens",
    gi: "Gi",
    location: defaultLocation
  },
  {
    id: "thu-all-levels-gi",
    day: "Thursday",
    start: "18:30",
    end: "20:00",
    title: "All Levels Gi BJJ",
    program: "Adults",
    gi: "Gi",
    location: defaultLocation
  },
  {
    id: "fri-frost-fit",
    day: "Friday",
    start: "18:15",
    end: "19:15",
    title: "Frost-fit Fitness Circuit",
    program: "Adults",
    gi: "No-Gi",
    location: defaultLocation
  },
  {
    id: "sat-junior-gi",
    day: "Saturday",
    start: "09:00",
    end: "10:00",
    title: "Junior Gi BJJ",
    program: "Kids",
    gi: "Gi",
    location: defaultLocation
  },
  {
    id: "sat-teens-gi",
    day: "Saturday",
    start: "10:00",
    end: "11:00",
    title: "Teens Gi BJJ",
    program: "Teens",
    gi: "Gi",
    location: defaultLocation
  },
  {
    id: "sat-all-levels-gi",
    day: "Saturday",
    start: "11:00",
    end: "12:30",
    title: "All Levels Gi BJJ",
    program: "Adults",
    gi: "Gi",
    location: defaultLocation
  },
  {
    id: "sun-open-mat",
    day: "Sunday",
    start: "09:00",
    end: "11:00",
    title: "Open Mat",
    program: "Open Mat",
    gi: "Mixed",
    location: defaultLocation
  }
];
function timeToMinutes(time) {
  const [hour, minute] = time.split(":").map((value) => Number.parseInt(value, 10));
  return hour * 60 + minute;
}
function pad2(value) {
  return value.toString().padStart(2, "0");
}
function formatTime(time) {
  const minutes = timeToMinutes(time);
  const hour24 = Math.floor(minutes / 60);
  const minute = minutes % 60;
  const suffix = hour24 >= 12 ? "PM" : "AM";
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
  return `${hour12}:${pad2(minute)} ${suffix}`;
}
function classDurationMinutes(item) {
  return timeToMinutes(item.end) - timeToMinutes(item.start);
}
function formatDuration(durationInMinutes) {
  if (durationInMinutes % 60 === 0) {
    const hours2 = durationInMinutes / 60;
    return `${hours2} hr${hours2 === 1 ? "" : "s"}`;
  }
  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;
  if (hours === 0) return `${minutes} min`;
  return `${hours} hr ${minutes} min`;
}
function matchesAudience(item, audience) {
  return true;
}
function matchesGi(item, giFilter) {
  return true;
}
function sortByDayAndTime(classes) {
  const dayOrder = new Map(weekDays.map((day, index) => [day, index]));
  return [...classes].sort((a, b) => {
    const dayDiff = (dayOrder.get(a.day) ?? 0) - (dayOrder.get(b.day) ?? 0);
    if (dayDiff !== 0) return dayDiff;
    return timeToMinutes(a.start) - timeToMinutes(b.start);
  });
}
function getClassLabelForSelect(item) {
  return `${item.day} ${formatTime(item.start)} - ${item.title}`;
}
export {
  formatDuration as a,
  matchesGi as b,
  classDurationMinutes as c,
  formatTime as f,
  getClassLabelForSelect as g,
  matchesAudience as m,
  sortByDayAndTime as s,
  timetableData as t,
  weekDays as w
};
