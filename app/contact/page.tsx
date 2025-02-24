"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check, XCircle } from "lucide-react";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://nicolasportafolio.netlify.app/.netlify/functions/server", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Error al enviar el mensaje");

      setIsSubmitted(true);
      (e.target as HTMLFormElement).reset();

      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      setErrorMessage("Hubo un problema al enviar el mensaje. Inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          Contáctanos
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.img
              src="/contact-img1.svg"
              alt="Contacto"
              className="rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-md border border-esmerald bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-md border border-esmerald bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 rounded-md border border-esmerald bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                ></textarea>
              </div>

              {errorMessage && (
                <div className="flex items-center bg-red-100 border border-red-500 text-red-700 px-4 py-2 rounded-md">
                  <XCircle className="h-5 w-5 mr-2 text-red-700" />
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full md:w-auto inline-flex items-center justify-center px-6 py-3 
                  transition-all border border-[#00ff00] cursor-pointer rounded-xl 
                  hover:shadow-xl hover:shadow-[#00ff00]/50  
                  bg-transparent text-white 
                  ${isSubmitted ? "bg-green-600 hover:bg-green-700" : ""} 
                  disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? (
                  <span>Enviando...</span>
                ) : isSubmitted ? (
                  <>
                    <Check className="h-5 w-5 mr-2" />
                    Mensaje Enviado
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Enviar Mensaje
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
