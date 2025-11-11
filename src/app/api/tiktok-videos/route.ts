import { NextResponse } from "next/server";
import axios from "axios";

const TIKTOK_API_KEY = process.env.TIKTOK_API_KEY;
const TIKTOK_API_URL = "https://open.tiktokapis.com/v2/video/list/";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json(
      { error: "Username is required" },
      { status: 400 }
    );
  }

  try {
    const response = await axios.get(TIKTOK_API_URL, {
      headers: {
        Authorization: `Bearer ${TIKTOK_API_KEY}`,
      },
      params: {
        username: username,
        max_count: 6, // 表示する動画の数
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("TikTok API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch TikTok videos" },
      { status: 500 }
    );
  }
}
