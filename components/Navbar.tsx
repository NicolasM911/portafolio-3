"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Briefcase, Mail, FileText, Wrench } from 'lucide-react'
import { cn } from '@/lib/utils'
import { FaLinkedin, FaFileAlt } from "react-icons/fa";


export default function Navbar() {
  const pathname = usePathname()

  const navigation = [
    { name: 'Inicio', href: '/', icon: Home },
    { name: 'Proyectos', href: '/projects', icon: Briefcase },
    { name: 'Servicios', href: '/services', icon: Wrench },
    { name: 'Contáctame', href: '/contact', icon: Mail },
  ]

  return (
    <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-400 to-green-500">
              Portafolio
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    pathname === item.href
                      ? "text-esmerald bg-esmerald/10"
                      : "text-primary hover:text-esmerald hover:bg-esmerald/10"
                  )}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {item.name}
                </Link>
              )
            })}

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <FaFileAlt className="w-6 h-6" />
            </a>

            <div className="social-icon">
              <a href='https://www.linkedin.com/in/nicolasmahecha11/' target="_blank" rel="noreferrer"><img src="/nav-icon1.svg" alt="" /></a>
            </div>

          </div>
        </div>
      </div>
    </nav>
  )
}