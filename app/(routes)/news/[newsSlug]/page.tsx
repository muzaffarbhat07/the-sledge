"use client";

import { NewsInfo } from "@/app/types/news";
import { useParams } from "next/navigation";
import Image from "next/image";

const NewsPage = () => {
  const { newsSlug } = useParams();
  console.log(newsSlug);
  const newsInfo: NewsInfo = {
    id: 1,
    title: "This is a very good title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: new Date(),
    image: "/images/haha.jpeg",
    category: "Category",
    slug: "Slug",
  }
  return (
    <section className="flex flex-col items-center gap-5 w-full min-h-[80vh]">
      <h2 className="text-3xl lg:text-4xl mt-5 p-3 font-serif max-w-3xl mx-auto">{newsInfo.title}</h2>
      <Image src={newsInfo.image} alt={newsInfo.title} width={400} height={400} className="rounded-md max-h-[600px] w-full mt-5 object-cover p-3" />
      <div className="flex justify-between w-full max-w-3xl mx-auto p-3 border-b-2 text-xs">
        <p>{newsInfo.date.toLocaleDateString()}</p>
        <p className="italic">{(newsInfo.content.length / 1000).toFixed(0)} mins read</p>
      </div>
      <p className="w-full max-w-3xl mx-auto p-3 font-serif text-lg">
        {newsInfo.content}
      </p>
    </section>
  )
}

export default NewsPage;