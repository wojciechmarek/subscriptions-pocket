"use client";

import { ClerkLoading, SignOutButton, SignUpButton, useUser } from "@clerk/nextjs";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';import { MoreVertical, Plus } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AppNewSubscriptionAndUserButton() {
  const { user } = useUser();
  const router = useRouter();

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
                aria-label="Customise options"
              >
                <MoreVertical />
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade">
                <DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                  <SignOutButton signOutCallback={() => router.push("/")} />
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
      </div>
    </div>
  )
}