"use client"

import { useCallback } from "react"
import type { Container, Engine } from "tsparticles-engine"
import Particles from "react-particles"
import { loadSlim } from "tsparticles-slim"

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#00ff00",
          },
          shape: {
            type: "char",
            character: {
              value: ["0", "1"],
              font: "Courier New",
              style: "",
              weight: "400",
              fill: true,
            },
          },
          size: {
            value: 12,
            random: true,
            animation: {
              enable: true,
              speed: 10,
              minimumValue: 10,
              sync: false,
            },
          },
          opacity: {
            value: 1,
            random: false,
            animation: {
              enable: true,
              speed: 3,
              minimumValue: 0,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "bounce",
            },
          },
          links: {
            enable: true,
            distance: 150,
            color: "#00ff00",
            opacity: 0.3,
            width: 1,
          },
        },
        detectRetina: true,
      }}
    />
  )
}
