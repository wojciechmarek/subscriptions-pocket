import { UserButton } from "@clerk/nextjs"
import Link from "next/link"
import Image from "next/image"
import logo from "../../../public/img/Logo.png"
import AppNavLink from "@/components/AppNavLink"
import { LayoutGrid, Menu, Plus } from "lucide-react"
import AppNewSubscriptionAndUserButton from "@/components/AppNewSubscriptionAndUserButton"
import AppUserButton from "@/components/AppUserButton"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin-ext"],
  display: "swap",
})

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`flex h-full ${inter.className}`}>
      <aside className="flex flex-col justify-between w-64">
        <div>
          <Link href={"/"} className="flex items-center justify-start gap-2 p-8">
            <Image src={logo} alt="pocketsub logo" height={34} />
            <h1 className="text-lg font-semibold">Pocketsub</h1>
          </Link>
          <nav className="flex flex-col">
            <AppNavLink href={"/dashboard"} text="Dashboard" icon={<LayoutGrid />} />
            <AppNavLink href={"/subscriptions"} text="Subscriptions" icon={<Menu />} />
          </nav>
        </div>
        <AppNewSubscriptionAndUserButton />
      </aside>
      <main className="max-h-screen overflow-hidden grow bg-zinc-200">
        {children}
      </main>
    </div>
  )
}
