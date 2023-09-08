import Link from "next/link"
import Image from "next/image"

import logo from "../../public/img/Logo.png";
import HomePageButtons from "@/components/HomePageButtons";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <header className="mx-auto flex max-w-7xl items-center p-6">
        <Link href={"/"} className="flex items-center gap-2">
          <Image src={logo} width={32} height={32} alt="pocketsub logo" />
          <h1 className="font-bold text-xl">Pocketsub</h1>
        </Link>
        <nav className="flex-1">
          <ul className="flex items-center justify-center gap-4">
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
        <HomePageButtons />
      </header>
      {children}
    </div>
  )
}
