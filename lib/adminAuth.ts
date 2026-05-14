import { cookies } from "next/headers";
import { createHmac, timingSafeEqual } from "crypto";

const cookieName = "graceful_admin_session";
const oneDay = 60 * 60 * 24;

function secret() {
  return process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD || "change-this-secret";
}

function sign(value: string) {
  return createHmac("sha256", secret()).update(value).digest("hex");
}

export function createAdminSession() {
  const expires = Math.floor(Date.now() / 1000) + oneDay;
  const payload = String(expires);
  return `${payload}.${sign(payload)}`;
}

export function verifyAdminSession(value?: string) {
  if (!value) return false;
  const [expires, signature] = value.split(".");
  if (!expires || !signature) return false;
  if (Number(expires) < Math.floor(Date.now() / 1000)) return false;

  const expected = sign(expires);
  const expectedBuffer = Buffer.from(expected);
  const signatureBuffer = Buffer.from(signature);

  return (
    expectedBuffer.length === signatureBuffer.length &&
    timingSafeEqual(expectedBuffer, signatureBuffer)
  );
}

export function isAdminRequest() {
  return verifyAdminSession(cookies().get(cookieName)?.value);
}

export function setAdminCookie(session: string) {
  cookies().set(cookieName, session, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: oneDay,
    path: "/"
  });
}

export function clearAdminCookie() {
  cookies().delete(cookieName);
}

