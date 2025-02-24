"use client"

import { motion } from "framer-motion"
import { FileText, Mail, Briefcase } from "lucide-react"
import Link from "next/link"
import { TypeAnimation } from 'react-type-animation'
import ParticlesBackground from "@/components/ParticlesBackground"
import { FaStar, FaLaptopCode, FaLinkedin } from "react-icons/fa"

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <ParticlesBackground />

      <div className="text-center z-10 max-w-3xl mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-400 to-green-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nicolás Mahecha
        </motion.h1>

        <motion.div
          className="mb-4"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="foto1.jpeg" // Reemplaza con la ruta de tu imagen
            alt="Profile Picture"
            className="w-24 h-24 rounded-full mx-auto border-4 border-lime-400"
          />
        </motion.div>

        <motion.div
          className="text-xl md:text-2xl text-blue-500 mb-4 flex items-center justify-center py-[4px] px-[4px] border border-[#4a90e2] bg-gray-900 opacity-[0.9] max-w-[300px] mx-auto text-center md:text-left rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <FaStar className="text-[#ffcc00] mr-[6px] h-6 w-6" />
          <h1 className="text-[15px] text-white">
            Ingeniero de Sistemas
          </h1>
          <FaLaptopCode className="text-[#ffcc00] ml-[6px] h-6 w-6" />

        </motion.div>


        <motion.div
          className="text-lg md:text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-primary text-2xl">Si puedes pensarlo, </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-400 to-green-500 text-2xl">
            <TypeAnimation
              sequence={[
                'puedes programarlo.',
                2000,
                'puedes desarrollarlo.',
                3000,
                'puedes optimizarlo.',
                4000,
                'puedes implementarlo.',
                2000,
                '',
                1000
              ]}
              repeat={Infinity}
              cursor={true}
            />
          </span>
        </motion.div>

        <motion.p
          className="text-muted-foreground mb-12 max-w-2xl mx-auto text-white text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span>
            Como Ingeniero de sistemas me centro en el desarrollo de soluciones tecnológicas innovadoras. busco optimizar procesos y mejorar la eficiencia a través de la tecnología.
          </span>
        </motion.p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/projects">
            <motion.button
              className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3 transition-all border border-[#00ff00] cursor-pointer rounded-xl hover:shadow-xl hover:shadow-[#00ff00]/50 bg-white text-black md:bg-transparent md:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Briefcase className="mr-2 h-5 w-5" />
              Proyectos
            </motion.button>
          </Link>

          <Link href="/contact">
            <motion.button
              className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3 transition-all border border-primary cursor-pointer rounded-xl hover:shadow-xl hover:shadow-white/50 bg-white text-black md:bg-transparent md:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contáctame
            </motion.button>
          </Link>

          <motion.a
            href="/cv.pdf"
            target="_blank"
            className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3 transition-all border border-[#00ff00] cursor-pointer rounded-xl hover:shadow-xl hover:shadow-[#00ff00]/50 bg-white text-black md:bg-transparent md:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <FileText className="mr-2 h-5 w-5" />
            Descargar CV
          </motion.a>
        </div>
      </div>
    </div>
  )
}