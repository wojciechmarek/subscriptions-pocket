interface AppContentHeaderProps {
  title: string
}

export default function AppContentHeader(props: AppContentHeaderProps) {
  const { title } = props;

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <div className="flex items-center gap-4">
        <button className="rounded-md border-2 border-zinc-500 bg-zinc-100 py-1 px-4 text-sm text-zinc-500">
          command pallet <span className="text-xs">⌘K</span>
        </button>
        <button className="rounded-md border-2 border-zinc-500 bg-zinc-100 py-1 px-4 text-sm text-zinc-500">
          Export CSV
        </button>
      </div>
    </div>
  )
}
