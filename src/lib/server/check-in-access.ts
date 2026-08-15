import { createHash, timingSafeEqual } from "node:crypto";
import { dev } from "$app/environment";
import type { Cookies } from "@sveltejs/kit";

export const CHECK_IN_COOKIE = "lebjj_check_in_access";

function digest(value: string): Buffer {
  return createHash("sha256").update(value).digest();
}

function sessionValue(accessToken: string): string {
  return createHash("sha256")
    .update(`lebjj-check-in-session:${accessToken}`)
    .digest("hex");
}

export function tokensMatch(provided: string, expected: string): boolean {
  return timingSafeEqual(digest(provided), digest(expected));
}

export function hasCheckInAccess(cookies: Cookies, accessToken: string): boolean {
  const cookie = cookies.get(CHECK_IN_COOKIE) || "";
  return tokensMatch(cookie, sessionValue(accessToken));
}

export function grantCheckInAccess(cookies: Cookies, accessToken: string): void {
  cookies.set(CHECK_IN_COOKIE, sessionValue(accessToken), {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: !dev,
    maxAge: 60 * 60 * 8,
  });
}
