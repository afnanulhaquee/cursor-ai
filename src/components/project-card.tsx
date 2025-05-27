'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  demoLink: string
  githubLink: string
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
    >
      <div className="relative h-48 w-full">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-800 animate-pulse" />
        )}
        {isError ? (
          <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
            <span className="text-gray-400">Failed to load image</span>
          </div>
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            onLoadingComplete={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false)
              setIsError(true)
            }}
          />
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-red-900 text-red-200 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-red-400 transition-colors"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-red-400 transition-colors"
          >
            <FaGithub />
            Source Code
          </a>
        </div>
      </div>
    </motion.div>
  )
} 