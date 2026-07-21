import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Quote, ArrowUpRight } from "lucide-react"

const ARTICLE_URL =
  "https://www.forbesargentina.com/liderazgo/historias-inspiran-mujeres-estan-dejando-huella-industria-tech-n92322"

export function Press() {
  return (
    <section className="py-16 px-4 bg-surface-alt">
      <div className="max-w-5xl mx-auto">
        <Card className="p-6 md:p-10 border-brand/20 bg-gradient-to-br from-brand/5 via-transparent to-brand-dark/5">
          <div className="grid md:grid-cols-[280px_1fr] gap-8 md:gap-12 items-center">
            {/* Photo */}
            <div className="relative mx-auto w-full max-w-[280px]">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/press/valeria-portrait.jpg"
                  alt="Valeria Ibañez"
                  fill
                  className="object-cover object-top"
                  sizes="280px"
                />
              </div>
              <div className="absolute bottom-0 inset-x-0 h-2.5 bg-gradient-to-r from-brand to-brand-dark rounded-b-2xl" />
            </div>

            {/* Quote bubble */}
            <div className="space-y-5">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-5 bg-brand rounded-full" />
                  <span className="text-sm font-bold tracking-wide uppercase text-brand">
                    Historias que inspiran
                  </span>
                </div>
                <p className="text-sm text-muted-foreground pl-3">
                  Mujeres que están dejando huella en la industria tech · <strong className="font-bold text-foreground">Forbes Argentina</strong>
                </p>
              </div>

              <div className="relative bg-card border rounded-2xl p-6 md:p-7 shadow-sm">
                <span
                  aria-hidden
                  className="hidden md:block absolute -left-3 top-8 w-6 h-6 bg-card border-l border-b rotate-45"
                />
                <Quote className="h-6 w-6 text-brand/30 mb-2" />
                <p className="text-lg md:text-xl leading-snug text-balance">
                  "Un aprendizaje clave como líder fue{" "}
                  <strong className="font-semibold">
                    entender que no tengo que tener todas las respuestas
                  </strong>
                  , sino saber escuchar, acompañar y potenciar a los demás."
                </p>
              </div>

              <p>
                <span className="font-semibold">Valeria Ibañez</span>
                <span className="text-muted-foreground italic">, Tech Lead</span>
              </p>

              <a
                href={ARTICLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-dark bg-brand-tint hover:bg-brand-tint/60 transition-colors rounded-full px-4 py-2"
              >
                Leer la nota completa en Forbes Argentina
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
