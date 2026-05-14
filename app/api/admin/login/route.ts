import { NextResponse } from "next/server";
import { createAdminSession, setAdminCookie } from "@/lib/adminAuth";

export async function POST(request: Request) {
  const { password } = await request.json();
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    return NextResponse.json(
      { message: "ADMIN_PASSWORD is not configured on the server." },
      { status: 500 }
    );
  }

  if (password !== adminPassword) {
    return NextResponse.json({ message: "Invalid password." }, { status: 401 });
  }

  setAdminCookie(createAdminSession());
  return NextResponse.json({ ok: true });
}

