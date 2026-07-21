import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Landmark, Smartphone, Layers, ShieldCheck, Handshake, type LucideIcon } from "lucide-react"

const domain = {
  title: "Especialización: fintech y medios de pago",
  context: "Plataformas de adquirencia, POS y terminales — liderando 3 equipos en producción",
  skills: ["Fintech", "Sistemas de Pago", "POS / Terminales", "Adquirencia de Tarjetas"],
}

const skillGroups: {
  category: string
  subtitle: string
  icon: LucideIcon
  skills: string[]
}[] = [
  {
    category: "Mobile",
    subtitle: "Apps de pago en producción con New Architecture",
    icon: Smartphone,
    skills: ["React Native", "New Architecture (TurboModules & Fabric)", "TypeScript"],
  },
  {
    category: "Web & BFF",
    subtitle: "Microfrontends y design systems centralizados",
    icon: Layers,
    skills: ["React", "Next.js", "Microfrontends (Webpack)", "Storybook", "Node.js", "NestJS"],
  },
  {
    category: "Calidad y seguridad",
    subtitle: "QA automatizado y compliance bancario",
    icon: ShieldCheck,
    skills: ["Jest", "React Testing Library", "Snyk"],
  },
  {
    category: "Liderazgo y prácticas",
    subtitle: "Cómo trabajo con los equipos día a día",
    icon: Handshake,
    skills: ["AI-Assisted Development (Claude Code)", "Code Reviews", "Mentoring"],
  },
]

function SkillPill({ children }: { children: string }) {
  return (
    <Badge variant="outline" className="rounded-full border-transparent bg-brand-tint text-brand-dark">
      {children}
    </Badge>
  )
}

export function Skills() {
  return (
    <section className="py-16 md:py-20 px-4 bg-surface-alt">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="space-y-4 text-center">
          <span className="block text-sm font-bold tracking-wide uppercase text-brand">Con qué trabajo</span>
          <h2 className="text-3xl md:text-4xl font-bold">Stack Tecnológico</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Herramientas y prácticas que uso para liderar equipos y construir productos escalables
          </p>
        </div>

        <Card className="p-6 md:p-8 gap-4 border-2 border-brand">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-brand-tint shrink-0">
              <Landmark className="h-6 w-6 text-brand" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">{domain.title}</h3>
              <p className="text-sm text-muted-foreground">{domain.context}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {domain.skills.map((skill) => (
              <SkillPill key={skill}>{skill}</SkillPill>
            ))}
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <Card key={group.category} className="p-5 gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-brand-tint shrink-0">
                  <group.icon className="h-5 w-5 text-brand" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-lg font-semibold leading-tight">{group.category}</h3>
                  <p className="text-xs text-muted-foreground">{group.subtitle}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <SkillPill key={skill}>{skill}</SkillPill>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
