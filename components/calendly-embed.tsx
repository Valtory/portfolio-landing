"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"

export function CalendlyEmbed() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative h-[700px] w-full">
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-card rounded-lg">
          <Loader2 className="h-6 w-6 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">Cargando calendario...</p>
        </div>
      )}
      <iframe
        src="https://calendly.com/valtory/1-1"
        width="100%"
        height="100%"
        frameBorder="0"
        loading="eager"
        onLoad={() => setLoaded(true)}
        className={`rounded-lg transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
        title="Calendly Scheduling"
      />
    </div>
  )
}
