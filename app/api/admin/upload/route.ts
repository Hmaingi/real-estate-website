import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";
import { hasSupabaseConfig } from "@/lib/properties";

export async function POST(request: Request) {
  if (!isAdminRequest()) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  if (!hasSupabaseConfig()) {
    return NextResponse.json(
      { message: "Supabase is not configured for image uploads." },
      { status: 500 }
    );
  }

  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ message: "No image file received." }, { status: 400 });
  }

  const bucket = process.env.SUPABASE_STORAGE_BUCKET || "property-images";
  const safeName = file.name.toLowerCase().replace(/[^a-z0-9.]+/g, "-");
  const path = `${Date.now()}-${safeName}`;
  const url = `${process.env.SUPABASE_URL}/storage/v1/object/${bucket}/${path}`;
  const body = await file.arrayBuffer();

  const upload = await fetch(url, {
    method: "PUT",
    headers: {
      apikey: process.env.SUPABASE_SERVICE_ROLE_KEY || "",
      Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY || ""}`,
      "Content-Type": file.type || "application/octet-stream",
      "x-upsert": "true"
    },
    body
  });

  if (!upload.ok) {
    return NextResponse.json(
      { message: "Image upload failed." },
      { status: upload.status }
    );
  }

  return NextResponse.json({
    url: `${process.env.SUPABASE_URL}/storage/v1/object/public/${bucket}/${path}`
  });
}

