import { NewsInfo } from "@/app/types/news";
import Image from "next/image"
import Link from "next/link"

const NewsFeedCard: React.FC<Readonly<{ newsItem: NewsInfo }>> = ({ newsItem }) => {
  return (
    <Link href={`/news/${newsItem.slug}`} className="flex flex-col gap-2">
      <Image 
        src={newsItem.image} 
        alt={newsItem.title} 
        width={400} 
        height={400}
        className="rounded-md"
      />
      <h2 className="font-semibold text-lg">{newsItem.title}</h2>
    </Link>
  )
}

export default NewsFeedCard;