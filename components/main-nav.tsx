"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home } from "lucide-react"

const navItems = [
  {
    title: "Home",
    href: "/",
    description: "Welcome and getting started",
    icon: <Home className="w-4 h-4" />,
  },
  {
    title: "Basic Types",
    href: "/basic-types",
    description: "Learn about TypeScript's basic types",
  },
  {
    title: "Interfaces",
    href: "/interfaces",
    description: "Working with TypeScript interfaces",
  },
  {
    title: "Functions",
    href: "/functions",
    description: "TypeScript functions and their types",
  },
  {
    title: "Classes",
    href: "/classes",
    description: "Object-oriented programming with TypeScript classes",
  },
  {
    title: "Generics",
    href: "/generics",
    description: "Understanding and using TypeScript generics",
  },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="w-64 min-h-screen bg-rose-50 p-6 flex flex-col gap-2">
      <Link href="/" className="mb-8 group">
        <h1 className="text-2xl font-bold text-rose-900 group-hover:text-rose-700 transition-colors">
          TypeScript Guide
        </h1>
        <p className="text-sm text-rose-700 mt-1">Your complete guide to TypeScript</p>
      </Link>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block p-3 rounded-lg transition-colors
              ${pathname === item.href ? "bg-rose-200 text-rose-900" : "text-rose-700 hover:bg-rose-100"}`}
          >
            <div className="font-medium flex items-center gap-2">
              {item.icon}
              {item.title}
            </div>
            <div className="text-sm text-rose-600 mt-0.5">{item.description}</div>
          </Link>
        ))}
      </nav>
    </div>
  )
}

