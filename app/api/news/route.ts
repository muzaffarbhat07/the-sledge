import News from "@/app/models/news";
import connectToDB from "@/app/utils/db";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  try {
    await connectToDB();

    const news = await News.find();
    revalidatePath(request.url);

    return NextResponse.json({
      message: 'success',
      news
    });
  } catch (error) {
    console.error('GET NEWS ERROR:', error);
    return new NextResponse(JSON.stringify({
      message: 'error',
      error: 'Something went wrong'
    }), { status: 500 });
  }
}

export const POST = async (request: Request) => {
  try {
    await connectToDB();

    const body = await request.json();

    // validate the body and create slug
    const { title, content,  image, author } = body;
    if(!title || !content || !image || !author) {
      return new NextResponse(JSON.stringify({
        message: 'failure',
        error: 'Params missing'
      }), { status: 400 });
    }

    const slug = body.title.toLowerCase().replace(/\s/g, '-');
    const news = new News({ ...body, slug });
    await news.save();

    return new NextResponse(JSON.stringify({
      message: 'success',
      news
    }), { status: 201 });
    
  } catch (error) {
    console.error('POST NEWS ERROR:', error);
    return new NextResponse(JSON.stringify({
      message: 'error',
      error: 'Something went wrong'
    }), { status: 500 });
  }
}
