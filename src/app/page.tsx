'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { PortfolioSection } from '@/components/portfolio-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-red-900 dark:from-black dark:to-red-950">
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-end mb-8">
          <ThemeToggle />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Your Name
          </h1>
          <h2 className="text-xl md:text-2xl text-red-400 mb-8">
            Information Technology Undergraduate & PR Lead at BlackBox AI
          </h2>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <Button
              variant="outline"
              className="bg-transparent text-white border-red-500 hover:bg-red-500 hover:text-white"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              className="bg-transparent text-white border-red-500 hover:bg-red-500 hover:text-white"
            >
              <HiDownload className="mr-2" />
              Download CV
            </Button>
          </div>
          
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-400 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-400 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      <PortfolioSection />
    </main>
  )
} 