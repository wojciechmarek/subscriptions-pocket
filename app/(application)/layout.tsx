export default function RootLayout({
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
