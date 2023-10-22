import type { Metadata } from 'next'
import './globals.css'
import {League_Spartan} from "next/font/google"

const mainFontFamily = League_Spartan({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: 'Alocaí',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mainFontFamily.className}>{children}</body>
    </html>
  )
}
