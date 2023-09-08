"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { Route } from "next";
import Link from "next/link";

export default function HomePageButtons() {
  const { isSignedIn } = useUser();

  return (
    <div className="flex items-center gap-4">
      {isSignedIn ? (
        <>
          <Link href={"/dashboard"}>Dashboard</Link>
          <UserButton afterSignOutUrl="/" />
        </>
      ) : (
        <>
          <Link href={"/sign-up" as Route}>Sign Up</Link>
          <Link href={"/sign-in" as Route}>Sign In</Link>
        </>
      )}
    </div>
  );
}