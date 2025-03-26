import React from "react"
import { motion } from "framer-motion"

interface TutorialResource {
  title: string
  description: string
  url: string
}

const tutorials: TutorialResource[] = [
  {
    title: "Web Dev Simplified",
    description: "Web Dev Simplified is all about teaching web development skills and techniques in an efficient and practical manner.",
    url: "https://www.youtube.com/@WebDevSimplified"
  },
  {
    title: "The Net Ninja",
    description: "Black-belt your web development skills. Over 2000 free programming tutorial videos about modern web development technologies.",
    url: "https://www.youtube.com/@NetNinja"
  },
  {
    title: "Bro Code",
    description: "This channel is dedicated to providing free education to those that can't afford college or bootcamps.",
    url: "https://www.youtube.com/@BroCodez"
  },
  {
    title: "freeCodeCamp",
    description: "Learn to code for free with freeCodeCamp's comprehensive video tutorials and courses.",
    url: "https://www.youtube.com/@freecodecamp"
  }
]

const VideoTutorialResources: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
    >
      <h2 className="mb-4 text-2xl font-bold text-gray-900">
        Programming Video Tutorials
      </h2>
      <p className="mb-6 text-gray-600">
        Here you'll find a collection of Youtube channels covering a wide range of programming topics, from beginner basics to advanced concepts.
      </p>

      <div className="space-y-4">
        {tutorials.map((tutorial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <a
              href={tutorial.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-white">
                {tutorial.title}
              </h3>
              <p className="mt-2 text-sm text-gray-300 opacity-90 transition-opacity group-hover:opacity-100">
                {tutorial.description}
              </p>
              <div className="mt-4 flex items-center text-sm text-modern-purple">
                <span className="font-medium">Visit Channel</span>
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

export default VideoTutorialResources


