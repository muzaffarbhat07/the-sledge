import News from "@/app/models/news";
import connectToDB from "@/app/utils/db";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  try {
    await connectToDB();

    const news = await News.find();
    revalidatePath(request.url);

    return NextResponse.json(news);
  } catch (error) {
    console.error('GET NEWS ERROR:', error);
    return new NextResponse(JSON.stringify({
      error: 'Something went wrong'
    }), { status: 500 });
  }
}
