import { NextResponse } from "next/server";

export async function GET() {
  const serverAddress = "ip207.ip-54-38-48.eu:25590";
  const apiUrl = `https://api.mcstatus.io/v2/status/java/${serverAddress}?query=true&timeout=5.0`;

  try {
    const response = await fetch(apiUrl, { next: { revalidate: 60 } });
    if (!response.ok) throw new Error("Ошибка получения данных");

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Не удалось получить статус сервера" },
      { status: 500 }
    );
  }
}
