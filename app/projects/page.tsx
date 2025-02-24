"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import ParticlesBackground from "@/components/ParticlesBackground";

type Project = {
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
  tags: string[];
  status: boolean;
  longDescription: string;
  features: string[];
};

const projects: Project[] = [
  {
    title: "AI Consejero Chatbot",
    description: "Chatbot Consejero: Una herramienta interactiva y personalizada",
    image: "/proyecto1.png",
    github: "https://github.com",
    live: "https://bot-consejero-ia.netlify.app/",
    tags: ["Flowise", "Cohere", "Groq", "Llama-3"],
    status: false,
    longDescription: "Chatbot Consejero creado con Flowise y Llama-3 para asesoramiento personalizado.",
    features: ["Conversaciones Empáticas", "Apoyo Confidencial", "Consejos Personalizados", "Interfaz Fácil de Usar"]
  },
  {
    title: "Proyecto IoT Forraje Verde",
    description: "Monitoreo y control de sistemas de riego con IoT y tecnología en la nube.",
    image: "/proyecto2.png",
    github: "https://github.com",
    live: "https://proyecto1nmp.netlify.app/",
    tags: ["Firebase", "React", "Arduino", "Esp-32"],
    status: false,
    longDescription: "Este proyecto de IoT está diseñado para monitorear y controlar sistemas de riego de manera eficiente. Utiliza una combinación de sensores y tecnología en la nube para proporcionar datos en tiempo real sobre las condiciones ambientales y automatizar el proceso de riego.",
    features: ["Monitoreo en Tiempo Real", "Control Automático del Riego", "Tecnología en la Nube", "Interfaz Intuitiva"]
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
          Proyectos
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-card rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-transform hover:scale-105 border border-transparent hover:border-esmerald"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <span className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-400 to-green-500">Ver Detalles</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-400 to-green-500">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className={`h-3 w-3 rounded-full ${project.status ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span className="text-sm text-muted-foreground">{project.status ? 'Activo' : 'Inactivo'}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-card rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-background/80 rounded-full hover:bg-background/90 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-400 to-green-500">{selectedProject.title}</h3>
                  <p className="text-white mb-6">{selectedProject.longDescription}</p>

                  <h4 className="font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-400 to-green-500">Características Principales:</h4>
                  <ul className="space-y-2 mb-6">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Ver Demo
                    </a>
                    {/* <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Github className="h-5 w-5 mr-2" />
                      Ver en GitHub
                    </a> */}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
