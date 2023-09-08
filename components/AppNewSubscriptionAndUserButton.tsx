"use client";

import { ClerkLoading, useUser } from "@clerk/nextjs";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { MoreVertical, Plus } from "lucide-react";
import Image from "next/image";

export default function AppNewSubscriptionAndUserButton() {
  const { user } = useUser();

  if (!user) {
    return <ClerkLoading />;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full divide-y-[1px] divide-zinc-300">
      <div>
        <p className="mb-2 text-center">Add new subscription?</p>
        <button className="flex items-center gap-3 py-3 pl-4 pr-6 mb-3 rounded-lg bg-zinc-900 text-zinc-50">
          <Plus />
          New subscription
        </button>
      </div>
      <div className="flex items-center justify-between w-full px-4 py-4">
        <Image src={user.imageUrl} alt="user profile image" width={40} height={40} className="rounded-full" />
        <p className="ml-2 text-sm font-semibold grow">{user.username}</p>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button
              className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-white shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
              aria-label="Customise options"
            >
              <MoreVertical />
            </button>
          </DropdownMenu.Trigger>
        </DropdownMenu.Root>
      </div>
    </div>
  )
}