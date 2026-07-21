import { Card } from "@/components/ui/card"
import { GitBranch, Swords, ScrollText, GraduationCap } from "lucide-react"

export function About() {
  return (
    <section id="sobre-mi" className="py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="space-y-4 text-center">
          <span className="block text-sm font-bold tracking-wide uppercase text-brand">Quién soy</span>
          <h2 className="text-3xl md:text-4xl font-bold">Sobre mí</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            {"\nSoftware Engineer, esgrimista y amante de la historia. Me apasiona liderar proyectos y equipos que combinan creatividad, tecnología y visión estratégica. Con varios años de experiencia en marketing y en el desarrollo de soluciones fintech, disfruto optimizar procesos, acompañar el crecimiento de quienes me rodean y construir productos que generen un impacto real y tangible."}
          </p>
          <span className="text-foreground font-medium">"Sé el Senior que necesitabas cuando eras Junior"</span>.
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-brand-tint">
                <GitBranch className="h-6 w-6 text-brand" />
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-semibold">Liderazgo Técnico</h3>
                <p className="text-muted-foreground leading-relaxed">
                Como Tech Lead, lidero equipos ágiles en el desarrollo de productos escalables con React Native (New Architecture) y BFF en Node.js. Impulso la automatización de QA, las buenas prácticas de seguridad y la mejora continua, promoviendo soluciones confiables y alineadas con los objetivos del negocio.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-brand-tint">
                <GraduationCap className="h-6 w-6 text-brand" />
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-semibold">Mentoría & Comunidad</h3>
                <p className="text-muted-foreground leading-relaxed">
Además de mi profesion en sistemas, colaboro como voluntaria en Nerdearla y lidero proyectos comunitarios en HEMA Argentina y HEMA Latam. Me interesa crear espacios donde las personas puedan compartir conocimiento, aprender de otras experiencias y encontrar oportunidades para crecer y conectarse.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-brand-tint">
                <Swords className="h-6 w-6 text-brand" />
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-semibold">Esgrima Histórica (HEMA)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  La esgrima histórica medieval es una de mis grandes pasiones. Como instructora y practicante, encontré en HEMA un espacio donde la estrategia, la disciplina y la práctica constante se combinan con el trabajo en equipo y el liderazgo. Muchos de estos aprendizajes también forman parte de mi manera de trabajar y de relacionarme con los demás.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-brand-tint">
                <ScrollText className="h-6 w-6 text-brand" />
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-semibold">Ciencia & Curiosidad</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Me apasionan la ciencia, la historia y el aprendizaje continuo. La curiosidad y el pensamiento crítico me impulsan a explorar nuevas ideas, cuestionar supuestos y buscar una comprensión más profunda de cómo funcionan las cosas. Para mí, aprender y compartir lo aprendido son parte fundamental del crecimiento personal y profesional.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
