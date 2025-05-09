import React from "react"
import { motion } from "framer-motion"

interface TutorialResource {
  title: string
  description: string
  url: string
  channel: string
}

const tutorials: TutorialResource[] = [
  {
    title: "Complete Guide to Open Source",
    description: "A comprehensive guide covering everything you need to know about contributing to open source projects.",
    url: "https://www.youtube.com/watch?v=yzeVMecydCE",
    channel: "freeCodeCamp"
  },
  {
    title: "First Time Open Source Contribution",
    description: "Learn the basics of making your first contribution to open source projects with practical examples.",
    url: "https://www.youtube.com/watch?v=c6b6B9oN4Vg",
    channel: "Meta Open Source"
  },
  {
    title: "How to Contribute to Open Source",
    description: "A practical guide to finding and contributing to open source projects effectively.",
    url: "https://www.youtube.com/watch?v=2L0sxPx4C18",
    channel: "strager"
  },
  {
    title: "Open Source Project Contributions",
    description: "Step-by-step tutorial on how to find, evaluate, and contribute to open source projects.",
    url: "https://www.youtube.com/watch?v=LxdyX9p0wrM",
    channel: "Tiff In Tech"
  },
  {
    title: "Open Source Career Impact",
    description: "Learn how contributing to open source can enhance your career and development skills.",
    url: "https://www.youtube.com/watch?v=CML6vfKjQss",
    channel: "Ask Cloud Architect"
  },
  {
    title: "Getting Started with Open Source",
    description: "A beginner-friendly guide to making your first steps in the open source community.",
    url: "https://www.youtube.com/watch?v=RGd5cOXpCQw",
    channel: "AssemblyAI"
  },
  {
    title: "Open Source Like a Pro",
    description: "Advanced techniques and best practices for contributing to open source projects.",
    url: "https://www.youtube.com/watch?v=MT6M_sqAuZo",
    channel: "Ben Awad"
  },
  {
    title: "First Pull Request Guide",
    description: "Detailed walkthrough of creating your first pull request on GitHub.",
    url: "https://www.youtube.com/watch?v=nkuYH40cjo4",
    channel: "DigitalOcean"
  }
]

const ContributingResources: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
    >
      <h2 className="mb-4 text-2xl font-bold text-gray-900">
        Contributing Resources
      </h2>
      <p className="mb-6 text-gray-600">
        Comprehensive video tutorials to help you understand and start contributing to open source projects.
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
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">
                  {tutorial.title}
                </h3>
                <span className="rounded-full bg-modern-purple/10 px-3 py-1 text-xs font-medium text-modern-purple text-center">
                  {tutorial.channel}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-300 opacity-90 transition-opacity group-hover:opacity-100">
                {tutorial.description}
              </p>
              <div className="mt-4 flex items-center text-sm text-modern-purple">
                <span className="font-medium">Watch Tutorial</span>
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

export default ContributingResources


