import Link from "next/link"
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="p-5 flex justify-between items-center w-full mx-auto border-t-2">
      <p className="text-lg font-bold">© {new Date().getFullYear()} The Sledge</p>
      <div className="flex gap-10 sm:gap-32 items-center">
        <Link href="/about" className="font-semibold text-lg hover:text-gray-600">About</Link>
        <div className="flex gap-3 sm:gap-8 text-2xl">
          <Link href="https://www.instagram.com/the-sledge/" target="_blank" className="hover:text-gray-600"><FaSquareInstagram /></Link>
          <Link href="https://www.x.com/the-sledge/" target="_blank" className="hover:text-gray-600"><FaSquareXTwitter /></Link>
        </div>
      </div>
    </div>
  )
}

export default Footer;