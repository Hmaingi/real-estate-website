import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";
import {
  defaultPropertyList,
  fromDatabaseProperty,
  hasSupabaseConfig,
  supabaseHeaders,
  toDatabaseProperty
} from "@/lib/properties";

const tableUrl = () => `${process.env.SUPABASE_URL}/rest/v1/properties`;

export async function GET() {
  if (!hasSupabaseConfig()) {
    return NextResponse.json({
      properties: defaultPropertyList,
      configured: false
    });
  }

  const response = await fetch(`${tableUrl()}?select=*&order=created_at.desc`, {
    headers: supabaseHeaders(),
    cache: "no-store"
  });

  if (!response.ok) {
    return NextResponse.json(
      { properties: defaultPropertyList, configured: false },
      { status: 200 }
    );
  }

  const rows = await response.json();
  return NextResponse.json({
    properties: rows.map(fromDatabaseProperty),
    configured: true
  });
}

export async function POST(request: Request) {
  if (!isAdminRequest()) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  if (!hasSupabaseConfig()) {
    return NextResponse.json(
      { message: "Supabase database is not configured." },
      { status: 500 }
    );
  }

  const property = await request.json();
  const response = await fetch(tableUrl(), {
    method: "POST",
    headers: {
      ...supabaseHeaders(),
      Prefer: "return=representation"
    },
    body: JSON.stringify(toDatabaseProperty(property))
  });

  if (!response.ok) {
    const error = await response.text();
    return NextResponse.json(
      { message: `Could not create property. ${error}` },
      { status: response.status }
    );
  }

  const [created] = await response.json();
  return NextResponse.json({ property: fromDatabaseProperty(created) });
}
