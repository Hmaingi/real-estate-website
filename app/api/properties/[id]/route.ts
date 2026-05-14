import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";
import {
  fromDatabaseProperty,
  hasSupabaseConfig,
  supabaseHeaders,
  toDatabaseProperty
} from "@/lib/properties";

interface RouteContext {
  params: {
    id: string;
  };
}

const itemUrl = (id: string) =>
  `${process.env.SUPABASE_URL}/rest/v1/properties?id=eq.${encodeURIComponent(id)}`;

export async function PATCH(request: Request, { params }: RouteContext) {
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
  const response = await fetch(itemUrl(params.id), {
    method: "PATCH",
    headers: {
      ...supabaseHeaders(),
      Prefer: "return=representation"
    },
    body: JSON.stringify(toDatabaseProperty(property))
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: "Could not update property." },
      { status: response.status }
    );
  }

  const [updated] = await response.json();
  return NextResponse.json({ property: fromDatabaseProperty(updated) });
}

export async function DELETE(_request: Request, { params }: RouteContext) {
  if (!isAdminRequest()) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  if (!hasSupabaseConfig()) {
    return NextResponse.json(
      { message: "Supabase database is not configured." },
      { status: 500 }
    );
  }

  const response = await fetch(itemUrl(params.id), {
    method: "DELETE",
    headers: supabaseHeaders()
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: "Could not delete property." },
      { status: response.status }
    );
  }

  return NextResponse.json({ ok: true });
}

