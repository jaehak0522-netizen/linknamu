import { NextResponse } from "next/server";
import { links } from "@/data/site";
import { recordClick } from "@/lib/clicks";

export const dynamic = "force-dynamic";

// 클릭 수를 기록한 뒤 실제 링크로 이동. site.ts에 등록된 링크로만 이동하므로 오픈 리다이렉트가 생기지 않음
export async function GET(req: Request, { params }: { params: { id: string } }) {
  const link = links.find((l) => l.id === params.id);
  if (!link) return NextResponse.redirect(new URL("/", req.url));

  await recordClick(link.id);
  return NextResponse.redirect(link.url);
}
