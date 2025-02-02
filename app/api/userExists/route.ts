import connectMongoDB from "@/lib";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectMongoDB();

    const { name, email } = await req.json();

    const user = await User.findOne({ $or: [{ name }, { email }] }).select(
      "_id"
    );

    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while checking user existence.", error },
      { status: 500 }
    );
  }
}
