import React from "react"
import { motion } from "framer-motion"

interface Platform {
  title: string
  description: string
  url: string
}

const platforms: Platform[] = [
  {
    title: "Codecademy",
    description: "Interactive platform offering coding courses with hands-on practice and immediate feedback.",
    url: "https://www.codecademy.com/"
  },
  {
    title: "freeCodeCamp",
    description: "Free coding curriculum with certifications and real-world projects to build your portfolio.",
    url: "https://www.freecodecamp.org/"
  },
  {
    title: "Exercism",
    description: "Improve your coding skills with practice exercises and mentorship from experienced developers.",
    url: "https://exercism.io/"
  },
  {
    title: "Brilliant",
    description: "Learn to think like a computer scientist through interactive problem solving and courses.",
    url: "https://brilliant.org/"
  },
  {
    title: "Treehouse",
    description: "Learn web design, coding & much more with comprehensive video tutorials and interactive exercises.",
    url: "https://teamtreehouse.com/"
  }
]

const InteractiveLearningPlatforms: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
    >
      <h2 className="mb-4 text-2xl font-bold text-gray-900">
        Interactive Learning Platforms
      </h2>
      <p className="mb-6 text-gray-600">
        Learn coding through interactive exercises, real-time feedback, and hands-on projects with these engaging platforms.
      </p>

      <div className="space-y-4">
        {platforms.map((platform, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-white">
                {platform.title}
              </h3>
              <p className="mt-2 text-sm text-gray-300 opacity-90 transition-opacity group-hover:opacity-100">
                {platform.description}
              </p>
              <div className="mt-4 flex items-center text-sm text-modern-purple">
                <span className="font-medium">Start Learning</span>
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

export default InteractiveLearningPlatforms


