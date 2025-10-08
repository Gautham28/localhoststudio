import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, services } = body || {};

    if (!name || !email) {
      return NextResponse.json({ ok: false, error: "Name and email are required." }, { status: 400 });
    }

    const url = process.env.GOOGLE_APPS_SCRIPT_URL;
    if (!url) {
      return NextResponse.json({ ok: false, error: "Missing GOOGLE_APPS_SCRIPT_URL." }, { status: 500 });
    }

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, services }),
      cache: "no-store",
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data?.ok) {
      return NextResponse.json({ ok: false, error: "Failed to save to Google Sheets." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}