import { Plus } from "lucide-react";

export default function AppUserButton() {
  return (
    <div className="flex flex-col items-center justify-center w-full divide-y-[1px] divide-zinc-300">
      <p className="mb-2 text-center">Add new subscription?</p>
      <button className="flex items-center gap-3 py-3 pl-4 pr-6 rounded-lg bg-zinc-900 text-zinc-50">
        <Plus />
        New subscription
      </button>
    </div>
  )
}