import News from "@/app/models/news";
import connectToDB from "@/app/utils/db";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (request: Request, { params }: { params : { id: string }}) => {
  try {
    await connectToDB();

    const { id } = params;
    const deletedNews = await News.findByIdAndDelete(id);

    return new NextResponse(JSON.stringify({
      message: 'success',
      deletedNews
    }), { status: 200 });

  } catch(error) {
    console.error('DELETE NEWS ERROR', error);
    return new NextResponse(JSON.stringify({
      message: 'error',
      error: 'Something went wrong'
    }), { status: 500 });
  }
}