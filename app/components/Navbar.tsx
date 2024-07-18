import Link from "next/link"
import Image from "next/image"
import NavbarLink from "./NavbarLink"

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between p-5">
      <Link href="/" className="flex items-center gap-2">
        <Image 
          src="/images/haha.png" 
          alt="logo" 
          width={50} 
          height={20}
          className="object-contain rounded-full"
        />
        <p className="max-sm:hidden font-satoshi font-semibold text-lg tracking-wide">The Sledge</p>
      </Link>
      <div className="flex gap-3 md:gap-5">
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink href="#">News</NavbarLink>
      </div>
    </nav>
  )
}

export default Navbar;