import { env } from "$env/dynamic/private";
import { redirect } from "@sveltejs/kit";
import { createRouteSeo } from "$lib/utils/seo";
import { getGymWeekDay } from "$lib/utils/date";
import {
  grantCheckInAccess,
  hasCheckInAccess,
  tokensMatch,
} from "$lib/server/check-in-access";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ cookies, url }) => {
  const accessToken = env.CHECK_IN_QR_TOKEN?.trim() || "";
  const suppliedToken = url.searchParams.get("key")?.trim() || "";

  if (accessToken && suppliedToken && tokensMatch(suppliedToken, accessToken)) {
    grantCheckInAccess(cookies, accessToken);
    throw redirect(303, "/check-in");
  }

  if (!accessToken || !hasCheckInAccess(cookies, accessToken)) {
    throw redirect(303, "/timetable");
  }

  return {
    seo: createRouteSeo("/check-in"),
    today: getGymWeekDay(),
  };
};
