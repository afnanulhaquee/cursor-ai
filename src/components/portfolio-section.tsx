'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ProjectCard } from './project-card'

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description of project 1',
    image: '/project1.jpg',
    tags: ['React', 'TypeScript', 'Tailwind'],
    demoLink: 'https://demo1.com',
    githubLink: 'https://github.com/username/project1',
  },
  // Add more projects here
]

const tags = ['All', 'React', 'TypeScript', 'Tailwind', 'Node.js']

export function PortfolioSection() {
  const [selectedTag, setSelectedTag] = useState('All')

  const filteredProjects = selectedTag === 'All'
    ? projects
    : projects.filter(project => project.tags.includes(selectedTag))

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          My Projects
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedTag === tag
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
} 