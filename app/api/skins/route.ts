import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { uuid } = await req.json();

    if (!uuid) {
      return NextResponse.json({ message: "URL не указан" }, { status: 400 });
    }

    const res = await fetch(
      `https://epohablokov-skins.s3.eu-north-1.amazonaws.com/${uuid}.png`,
      {
        headers: { "User-Agent": "Mozilla/5.0" },
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { message: "Ошибка загрузки скина" },
        { status: 500 }
      );
    }

    const imageBuffer = await res.arrayBuffer();

    return new Response(imageBuffer, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch (error) {
    console.error("Ошибка при проксировании запроса:", error);
    return NextResponse.json({ message: "Ошибка сервера" }, { status: 500 });
  }
}
