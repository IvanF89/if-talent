import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  // TODO: salvare messaggi e valutazione strutturata in Supabase/OpenAI.
  return NextResponse.json({ ok: true, applicationId: body.applicationId });
}
