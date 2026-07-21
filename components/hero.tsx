import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { LinkedInLogo } from "@/components/icons/linkedin-logo"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">Valeria Ibañez</h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Tech Lead Mobile &amp; Frontend · Fintech, POS &amp; AI-Assisted Engineering
          </p>
          <a
            href="https://www.linkedin.com/in/valeria-ibanez/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 hover:bg-primary/15 transition-colors rounded-full px-4 py-2"
          >
            <LinkedInLogo className="h-4 w-4" />
            Conectar en LinkedIn
          </a>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
          Liderando equipos mobile, construyendo experiencias digitales excepcionales y explorando la intersección entre
          tecnología e historia.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button size="lg" className="group" asChild>
            <a href="#consulta">
              Agendar Consulta
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#sobre-mi">Conocer más</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
