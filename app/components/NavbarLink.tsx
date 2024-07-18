import Link from "next/link";

interface NavbarLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({
  href,
  children,
}) => {
  return (
    <Link href={href} className="font-inter hover:text-green-600 duration-200">{children}</Link>
  )
}

export default NavbarLink;