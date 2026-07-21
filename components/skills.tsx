import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillGroups = [
  {
    category: "Domain",
    skills: ["Fintech", "Sistemas de Pago", "POS / Terminales", "Adquirencia de Tarjetas"],
  },
  {
    category: "Mobile",
    skills: ["React Native", "New Architecture (TurboModules & Fabric)", "TypeScript"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Microfrontends (Webpack)", "Styled Components", "Storybook"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "NestJS"],
  },
  {
    category: "Testing & Seguridad",
    skills: ["Jest", "React Testing Library", "Snyk"],
  },
  {
    category: "Tools & Prácticas",
    skills: ["Android Studio", "Xcode", "AI-Assisted Development (Claude Code)", "Code Reviews", "Mentoring"],
  },
]

export function Skills() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Stack Tecnológico</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Herramientas y prácticas que uso para liderar equipos y construir productos escalables
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <Card key={group.category} className="p-6 space-y-4">
              <h3 className="text-lg font-semibold">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
