import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ScrollAnimations } from "@/components/scroll-animations"
import "./globals.css"

export const metadata: Metadata = {
  title: "Tahura Architects - Professional Floor Plan & Architectural Design Services",
  description:
    "Professional floor plan drawing, redrawing, and architectural design services for customers across the USA. Fast delivery, expert quality, satisfaction guaranteed.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <ScrollAnimations />
        <Analytics />
      </body>
    </html>
  )
}
