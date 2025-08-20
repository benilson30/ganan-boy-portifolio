import type React from "react"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata = {
  title: "Ganan Boy - Portfólio Artístico",
  description: "Jovem músico angolano com raízes africanas, misturando Afrobeat, R&B e Rap melódico",
  generator: 'GingaSoft .Inc'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={`${inter.variable} ${poppins.variable} antialiased`}>
      <head>
        <link rel="shortcut icon" href="images/Ganan-Boy.png" type="image/x-icon" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
