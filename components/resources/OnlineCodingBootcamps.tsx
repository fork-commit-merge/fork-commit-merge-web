import React from "react"
import { motion } from "framer-motion"

interface Bootcamp {
  title: string
  description: string
  url: string
}

const bootcamps: Bootcamp[] = [
  {
    title: "App Academy",
    description: "Immersive software development course focusing on full-stack web development with Ruby on Rails and JavaScript.",
    url: "https://www.appacademy.io/"
  },
  {
    title: "Lambda School",
    description: "Learn to code online with mentorship, peer learning, and real-world projects. Pay only when you get hired.",
    url: "https://lambdaschool.com/"
  },
  {
    title: "General Assembly",
    description: "Transform your career with coding bootcamps in web development, data science, and UX design.",
    url: "https://generalassemb.ly/"
  },
  {
    title: "Launch School",
    description: "Master software engineering fundamentals with a unique mastery-based learning approach.",
    url: "https://launchschool.com/"
  },
  {
    title: "Career Foundry",
    description: "Flexible online bootcamps with expert mentoring and career coaching to help you land your dream tech job.",
    url: "https://careerfoundry.com/"
  },
  {
    title: "Brain Station",
    description: "Learn in-demand tech skills from industry experts through project-based learning and real-world scenarios.",
    url: "https://brainstation.io/"
  }
]

const OnlineCodingBootcamps: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
    >
      <h2 className="mb-4 text-2xl font-bold text-gray-900">
        Online Coding Bootcamps
      </h2>
      <p className="mb-6 text-gray-600">
        Online bootcamps offer comprehensive and structured learning experiences
        for aspiring developers. They provide in-depth curricula and project-based
        learning to help you build a solid foundation in software development.
      </p>

      <div className="space-y-4">
        {bootcamps.map((bootcamp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <a
              href={bootcamp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-white">
                {bootcamp.title}
              </h3>
              <p className="mt-2 text-sm text-gray-300 opacity-90 transition-opacity group-hover:opacity-100">
                {bootcamp.description}
              </p>
              <div className="mt-4 flex items-center text-sm text-modern-purple">
                <span className="font-medium">Learn More</span>
                <svg
                  className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default OnlineCodingBootcamps

