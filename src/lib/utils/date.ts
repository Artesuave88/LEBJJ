import { weekDays, type WeekDay } from "$lib/data/timetable";

export const GYM_TIME_ZONE = "Europe/London";

export function getGymWeekDay(date = new Date()): WeekDay {
  const day = new Intl.DateTimeFormat("en-GB", {
    timeZone: GYM_TIME_ZONE,
    weekday: "long",
  }).format(date);

  return weekDays.find((weekDay) => weekDay === day) ?? "Monday";
}

export function formatSubmissionTimestamp(date: Date): string {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}-${month}-${year} ${hours}-${minutes}`;
}
