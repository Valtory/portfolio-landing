import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const experiences = [
  {
    role: "Tech Lead Mobile @ Link",
    company: "Redbee Studios",
    period: "jul 2025 - Actual",
    description:
      "Lidero 3 equipos para la plataforma multitenant de adquirencia de Link: mobile con React Native New Architecture (TurboModules y Fabric), microfrontends con React, y BFF con NestJS. Diseño y mantengo un Design System centralizado con Storybook, y gestiono compliance de seguridad con Snyk.",
    skills: ["React Native", "New Architecture", "NestJS", "Spring Boot", "Team Management", "Fintech", "POS"],
  },
  {
    role: "Tech Lead / Sr Software Engineer",
    company: "Redbee Studios - Santander Argentina",
    period: "ene 2025 - ago 2025",
    description:
      "Lideré el desarrollo de Dashboard 3.0 para Santander Argentina, aplicando React, React Native y Node.js para entregar soluciones fintech escalables y eficientes.",
    skills: ["React", "React Native", "Node.js", "Fintech"],
  },
  {
    role: "Senior Software Engineer / Line Manager",
    company: "Avenga - Banco Galicia",
    period: "jul 2021 - ene 2025",
    description:
      "Frontend Ssr con React y backend support con Node.js (BFF), además de React Native (Android & iOS). Como Line Manager acompañé el crecimiento profesional del equipo, y lideré puntualmente Wallet Movilcash (equipo de 5) con autenticación biométrica.",
    skills: ["React", "TypeScript", "React Native", "Team Management"],
  },
  {
    role: "Mobile Developer",
    company: "Uniciti",
    period: "abr 2024 - dic 2024",
    description:
      "Desarrollo de app mobile de seguridad y geolocalización con React Native CLI, Google Maps, Zustand y Redux. Publicada en Google Play.",
    skills: ["React Native", "TypeScript", "Zustand", "Redux"],
    link: "https://play.google.com/store/apps/details?id=com.unicitisos&hl=es_AR",
  },
  {
    role: "Marketing & Customer Experience",
    company: "Universidad Siglo 21",
    period: "2015 - 2020",
    description:
      "Analista de marketing y atención al cliente, con manejo de CRM Microsoft, campañas de posicionamiento SEO, email marketing y Content Management en redes sociales.",
    skills: ["CRM", "SEO/SEM", "Content Management", "Social Media"],
  },
]

export function Experience() {
  return (
    <section className="py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="space-y-4 text-center">
          <span className="block text-sm font-bold tracking-wide uppercase text-brand">Trayectoria</span>
          <h2 className="text-3xl md:text-4xl font-bold">Experiencia</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Más de 5 años liderando equipos y construyendo soluciones mobile y frontend para el ecosistema Fintech
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <Badge variant="secondary" className="w-fit rounded-full border-transparent bg-brand-tint text-brand-dark">
                    {exp.period}
                  </Badge>
                </div>

                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="rounded-full border-transparent bg-brand-tint text-brand-dark">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm text-brand hover:underline"
                  >
                    Ver app publicada →
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center pt-2">
          <Button size="lg" className="group" asChild>
            <a href="#consulta">
              Agendar Consulta
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
