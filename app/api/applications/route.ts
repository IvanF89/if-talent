import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const form = await request.formData();
  const applicationId = crypto.randomUUID();
  const payload = Object.fromEntries(form.entries());
  // TODO: salvare payload su Supabase. Per ora la V1 navigabile prosegue con un ID temporaneo.
  const response = NextResponse.redirect(new URL(`/interview/${applicationId}`, request.url), 303);
  response.cookies.set("if_application", JSON.stringify(payload), { httpOnly: true, sameSite: "lax", maxAge: 3600 });
  return response;
}
