import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import type { Metadata } from 'next'
import { inject } from '@vercel/analytics';

export const metadata: Metadata = {
  title: 'Subscriptions pocket',
  description: 'Manage your subscriptions in one place.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  inject();
  return (
    <ClerkProvider>
      <html lang="en">
      <body className="h-screen text-zinc-950">{children}</body>
      </html>
    </ClerkProvider>
  )
}
