"use client"

import { motion } from "framer-motion"
import { Globe, Database, Bot, Wrench } from "lucide-react"
import ParticlesBackground from "@/components/ParticlesBackground"

const services = [
  {
    id: "frontend",
    icon: Globe,
    title: "Desarrollo Web Frontend",
    description: "Creación de interfaces modernas y responsivas",
    tools: ["React", "Next.js", "TailwindCSS", "TypeScript"]
  },
  {
    id: "backend",
    icon: Database,
    title: "Desarrollo Backend",
    description: "APIs y bases de datos",
    tools: ["Node.js", "Express", "SQL", "MongoDB"]
  },
  {
    id: "ai",
    icon: Bot,
    title: "IA y Machine Learning",
    description: "Herramientas de IA y aprendizaje automático",
    tools: ["Python", "Pandas", "Scikit-learn"]
  },
  {
    id: "support",
    icon: Wrench,
    title: "Soporte",
    description: "Soporte de equipos y redes básicas",
    tools: ["Mantenimiento", "Backups", "Sistemas Operativos"]
  },
]

export default function Services() {
  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />

      <div className="max-w-6xl mx-auto z-10 relative px-4 py-8">
        <motion.h1
          className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-400 to-green-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Servicios
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                className="bg-card rounded-lg p-6 shadow-lg transition-transform border border-transparent hover:scale-105 hover:shadow-xl hover:border-esmerald"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Icon className="h-12 w-12 text-esmerald mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>

                <div className="flex flex-wrap gap-2">
                  {service.tools.map(tool => (
                    <span
                      key={tool}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
