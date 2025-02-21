import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { MainNav } from "@/components/main-nav"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TypeScript Guide",
  description: "Learn TypeScript from basics to advanced concepts",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen">
          <MainNav />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}

