import { Card } from "@/components/ui/card"
import { Code2, Sword, BookOpen, Users } from "lucide-react"

export function About() {
  return (
    <section id="sobre-mi" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Sobre mí</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            {"\nSoftware Engineer, esgrimista y amante de la historia. Me apasiona liderar proyectos y equipos que combinan creatividad, tecnología y visión estratégica. Con varios años de experiencia en marketing y en el desarrollo de soluciones fintech, disfruto optimizar procesos, acompañar el crecimiento de quienes me rodean y construir productos que generen un impacto real y tangible."}
          </p>
          <span className="text-foreground font-medium">"Sé el Senior que necesitabas cuando eras Junior"</span>.
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-semibold">Liderazgo Técnico</h3>
                <p className="text-muted-foreground leading-relaxed">
                 Lidero un equipo ágil, construyendo productos escalables con React Native (New Arch) y BFF con Node.js. Promuevo automatizaciones de QA y buenas prácticas de seguridad para entregar soluciones confiables y orientadas al negocio.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-semibold">Mentoría & Enseñanza</h3>
                <p className="text-muted-foreground leading-relaxed">
                 Colaboro como voluntaria en comunidades como Sysarmy y Nerdearla. Me apasiona compartir conocimiento, impulsar el crecimiento de otros desarrolladores y generar espacios donde aprender sea una experiencia accesible y colaborativa. 
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <Sword className="h-6 w-6 text-accent" />
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-semibold">Esgrima Histórica (HEMA)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Practico y enseño esgrima histórica medieval. La disciplina, la estrategia y el trabajo en equipo que promueve este arte marcial complementan mi enfoque técnico y mi manera de liderar.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-semibold">Ciencia & Historia</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Apasionada por la ciencia, la época medieval y la historia. Me inspiran la curiosidad, el pensamiento crítico y entender cómo la tecnología y el conocimiento han impulsado a la humanidad a lo largo del tiempo.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
