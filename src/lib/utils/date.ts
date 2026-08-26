import { weekDays, type WeekDay } from "$lib/data/timetable";

export const GYM_TIME_ZONE = "Europe/London";

export function getGymWeekDay(date = new Date()): WeekDay {
  const day = new Intl.DateTimeFormat("en-GB", {
    timeZone: GYM_TIME_ZONE,
    weekday: "long",
  }).format(date);

  return weekDays.find((weekDay) => weekDay === day) ?? "Monday";
}

export function getGymDateKey(date = new Date()): string {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: GYM_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const value = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return `${value("year")}-${value("month")}-${value("day")}`;
}

export function formatSubmissionTimestamp(date: Date): string {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}-${month}-${year} ${hours}-${minutes}`;
}
