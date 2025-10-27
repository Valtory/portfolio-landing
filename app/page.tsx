import { Hero } from "@/components/hero"
import Head from "next/head"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Consultation } from "@/components/consultation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
  <>
  <Head>
        <title>Valtory.dev – Valeria Ibanez Portfolio</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        {/* Opcional: favicon PNG para compatibilidad */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Head>
    <main className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Consultation />
      <Footer />
    </main>
    </>
  )
}
