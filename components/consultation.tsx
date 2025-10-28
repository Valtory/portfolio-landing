import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, CheckCircle2 } from "lucide-react"

const consultationTypes = [
  {
    title: "Consulta de Arquitectura Mobile",
    duration: "60 minutos",
    description: "Revisión de arquitectura, mejores prácticas y optimización de aplicaciones React Native.",
    benefits: ["Análisis de arquitectura actual", "Recomendaciones de mejora", "Plan de implementación"],
  },
  {
    title: "Mentoría de Liderazgo Técnico",
    duration: "45 minutos",
    description: "Guía para desarrolladores que están transitando hacia roles de liderazgo técnico.",
    benefits: ["Estrategias de gestión de equipo", "Desarrollo de carrera", "Resolución de desafíos específicos"],
  },
  {
    title: "Code Review & Pair Programming",
    duration: "90 minutos",
    description: "Sesión práctica de revisión de código y programación en conjunto.",
    benefits: ["Revisión detallada de código", "Mejores prácticas en tiempo real", "Solución de problemas técnicos"],
  },
]

export function Consultation() {
  return (
    <section id="consulta" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Agenda una Consulta</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Ofrezco consultas técnicas personalizadas para ayudarte con arquitectura mobile, liderazgo técnico y
            desarrollo de carrera.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {consultationTypes.map((consultation, index) => (
            <Card key={index} className="p-6 space-y-6 flex flex-col hover:shadow-lg transition-shadow">
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-2 text-primary">
                  <Calendar className="h-5 w-5" />
                  <span className="text-sm font-medium">Videollamada</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-balance">{consultation.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{consultation.duration}</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">{consultation.description}</p>

                <div className="space-y-2">
                  {consultation.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full" asChild>
                <a href="https://calendly.com/valtory/1-1" target="_blank" rel="noopener noreferrer">
                  Agendar Reunión
                </a>
              </Button>
            </Card>
          ))}
        </div>

        {/* <div className="text-center pt-8">
          <p className="text-muted-foreground mb-4">¿No estás seguro qué tipo de consulta necesitas?</p>
          <Button size="lg" variant="outline" asChild>
            <a href="https://calendly.com/valtory/1-1" target="_blank" rel="noopener noreferrer">
              Ver Disponibilidad en Calendly
            </a>
          </Button>
        </div> */}
        <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-[700px] w-full">
                <iframe
                  src="https://calendly.com/valtory/1-1"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="rounded-lg"
                  title="Calendly Scheduling"
                />
              </div>
            </CardContent>
          </Card>
      </div>
    </section>
  )
}
