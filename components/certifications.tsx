import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Languages } from "lucide-react"

const education = [
  {
    title: "Ingeniería en Computación",
    institution: "Universidad Nacional de Córdoba",
    period: "2024 - 2029 (en curso)",
  },
  {
    title: "Técnico Superior en Programación",
    institution: "Teclab Instituto Técnico Superior",
    period: "2018 - 2020",
  },
]

const certifications = [
  "Certificado de Desarrollo Seguro — Banco Galicia",
  "React PRO: Advanced",
  "Complete Front-End Web Development Course",
  "Desarrollo Backend Orientado a Objetos (Python, Java, JavaScript y PHP)",
  "Certificación Internacional en Gestión de Social Media — Universitat de Barcelona",
]

export function Certifications() {
  return (
    <section className="py-16 md:py-20 px-4 bg-surface-alt">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="space-y-4 text-center">
          <span className="block text-sm font-bold tracking-wide uppercase text-brand">Formación</span>
          <h2 className="text-3xl md:text-4xl font-bold">Educación & Certificaciones</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Formación continua en ingeniería, desarrollo y liderazgo técnico
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-brand-tint">
                <GraduationCap className="h-5 w-5 text-brand" />
              </div>
              <h3 className="text-lg font-semibold">Educación</h3>
            </div>
            <div className="space-y-4">
              {education.map((item) => (
                <div key={item.title} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.institution}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{item.period}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Award className="h-4 w-4 text-brand" />
                Certificaciones
              </div>
              <ul className="space-y-1.5">
                {certifications.map((cert) => (
                  <li key={cert} className="text-sm text-muted-foreground leading-relaxed">
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-brand-tint">
                <Languages className="h-5 w-5 text-brand" />
              </div>
              <h3 className="text-lg font-semibold">Idiomas</h3>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Inglés</span>
              <Badge variant="outline" className="rounded-full border-transparent bg-brand-tint text-brand-dark">B2 - Full Professional</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Español</span>
              <Badge variant="outline" className="rounded-full border-transparent bg-brand-tint text-brand-dark">Nativo</Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
