export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <aside>Aside application</aside>
      <main>
        {children}
      </main>
    </div>
  )
}
