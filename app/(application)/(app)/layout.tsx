import { UserButton } from "@clerk/nextjs"

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <aside>
        menu aside
      </aside>
      <main>
        {children}
      </main>
    </div>
  )
}
