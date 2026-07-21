import { Hero } from "@/components/hero"
import { Press } from "@/components/press"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Certifications } from "@/components/certifications"
import { Consultation } from "@/components/consultation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Press />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <Consultation />
      <Footer />
    </main>
  )
}
