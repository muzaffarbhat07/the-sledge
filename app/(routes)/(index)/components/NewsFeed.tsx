import { NewsInfo } from "@/app/types/news";
import NewsFeedCard from "./NewsFeedCard";

type News = NewsInfo[];

const NewsFeed = () => {
  const news: News = [
    {
      id: 1,
      title: "This is title1 - news heading",
      content: "Content",
      date: new Date(),
      image: "/images/haha.jpeg",
      category: "Category",
      slug: "Slug",
    },
    {
      id: 2,
      title: "Title2",
      content: "Content",
      date: new Date(),
      image: "/images/haha.jpeg",
      category: "Category",
      slug: "Slug",
    },
    {
      id: 3,
      title: "Title3",
      content: "Content",
      date: new Date(),
      image: "/images/haha.jpeg",
      category: "Category",
      slug: "Slug",
    },
    {
      id: 4,
      title: "Title4",
      content: "Content",
      date: new Date(),
      image: "/images/haha.jpeg",
      category: "Category",
      slug: "Slug",
    },
    {
      id: 5,
      title: "Title5",
      content: "Content",
      date: new Date(),
      image: "/images/haha.jpeg",
      category: "Category",
      slug: "Slug",
    },
    {
      id: 6,
      title: "Title6",
      content: "Content",
      date: new Date(),
      image: "/images/haha.jpeg",
      category: "Category",
      slug: "Slug",
    },
    {
      id: 7,
      title: "Title7",
      content: "Content",
      date: new Date(),
      image: "/images/haha.jpeg",
      category: "Category",
      slug: "Slug",
    },
    {
      id: 8,
      title: "Title8",
      content: "Content",
      date: new Date(),
      image: "/images/haha.jpeg",
      category: "Category",
      slug: "Slug",
    }
  ]
  return (
    <div className="flex gap-8 mx-auto w-full justify-center flex-wrap">
      {news.map((newsItem) => (
        <NewsFeedCard key={newsItem.id} newsItem={newsItem} />
      ))}
    </div>
  )
}

export default NewsFeed;