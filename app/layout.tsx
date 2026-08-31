import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Valeria Ibañez - Tech Lead Mobile & Frontend | Fintech & POS",
  description:
    "Portfolio de Valeria Ibañez, Tech Lead especializada en Mobile & Frontend (React Native, React), liderando equipos en soluciones Fintech y POS con desarrollo asistido por IA.",
  keywords: [
    "Valeria Ibañez",
    "Tech Lead",
    "React Native",
    "Mobile Developer",
    "Fintech",
    "POS",
    "AI-Assisted Engineering",
  ],
  generator: "v0.app",
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Valeria Ibañez",
  jobTitle: "Tech Lead Mobile & Frontend",
  sameAs: ["https://www.linkedin.com/in/valeria-ibanez/"],
  memberOf: [
    {
      "@type": "Organization",
      name: "HEMA Argentina",
      url: "https://www.hema-argentina.com",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://calendly.com" />
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="preconnect" href="https://js.stripe.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
