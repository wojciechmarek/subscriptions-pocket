import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Subscriptions pocket',
  description: 'Manage your subscriptions in one place.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
