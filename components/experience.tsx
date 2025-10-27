import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    role: "Tech Lead",
    company: "Redbee Studios - Santander / Red Link",
    period: "Actual",
    description:
      "Lidero un equipo mobile y backend, desarrollando soluciones fintech con la Nueva Arquitectura de React Native y tecnologías modernas, enfocadas en escalabilidad, seguridad y eficiencia.",
    skills: ["React Native", "TypeScript", "Leadership", "Mobile Architecture"],
  },
  {
    role: "Line Manager & Senior Software Engineer",
    company: "Avenga - Banco Galicia",
    period: "3+ años",
    description: "Desarrollo de soluciones frontend avanzadas con React y TypeScript, coordinación de equipos, planificación de roadmaps profesionales y colaboración en la definición del design system con UX.",
    skills: ["React", "TypeScript", "Team Management", "BFF"],
  },
  {
    role: "Mobile Developer",
    company: "Uniciti",
    period: "1+ año",
    description: "Desarrollo de aplicaciones móviles nativas y multiplataforma, enfocadas en brindar experiencias de usuario fluidas y eficientes, utilizando React Native, Android e iOS.",
    skills: ["React Native", "Android", "iOS", "Mobile Development"],
  },
  {
    role: "Marketing Analyst / Customer Support Advisor",
    company: "Universidad Siglo 21",
    period: "5+ años",
    description: "Especialista en marketing y atención al cliente, con más de 5 años manejando CRM, estrategias de SEO/SEM, redes sociales y segmentación de clientes para impulsar ventas y fidelización.",
    skills: ["React Native", "Android", "iOS", "Mobile Development"],
  },
]

export function Experience() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Experiencia</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Más de 5 años construyendo productos digitales y liderando equipos de desarrollo
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
                  <Badge variant="secondary" className="w-fit">
                    {exp.period}
                  </Badge>
                </div>

                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
