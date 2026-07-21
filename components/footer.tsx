import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LinkedInLogo } from "@/components/icons/linkedin-logo"

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-lg font-semibold">Valeria Ibañez</h3>
            <p className="text-sm text-muted-foreground">Tech Lead | Software Engineer Staff | Córdoba, Argentina</p>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" className="gap-2" asChild>
              <a
                href="https://www.linkedin.com/in/valeria-ibanez/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInLogo className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:valtorydev@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Valeria Ibañez. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
