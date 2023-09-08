"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { UrlObject } from "url";
import { clsx } from "clsx";

interface AppNavLinkProps extends LinkProps<unknown> {
  icon: React.ReactNode;
  text: string;
}

export default function AppNavLink({ icon, text, href }: AppNavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname === (href as UrlObject).pathname;

  return (
    <Link href={href} className={clsx("flex items-center w-full gap-2 px-8 py-4", isActive && "border-r-4 border-zinc-400 bg-zinc-950 text-zinc-50")}>
      {icon}
      <p className="font-semibold">{text}</p>
    </Link>
  )
}