import React from "react"
import { motion } from "framer-motion"

interface Documentation {
  title: string
  description: string
  url: string
}

const documentations: Documentation[] = [
  {
    title: "Introduction to Open Source",
    description: "A comprehensive guide to understanding open source software, its principles, and benefits.",
    url: "https://opensource.guide/"
  },
  {
    title: "First Contributions on GitHub",
    description: "Step-by-step guide to making your first open source contribution on GitHub.",
    url: "https://github.com/firstcontributions/first-contributions"
  },
  {
    title: "What is Open Source?",
    description: "Detailed explanation of open source software, its history, and importance in modern development.",
    url: "https://www.codecademy.com/articles/what-is-open-source"
  },
  {
    title: "Open Source Initiative Resources",
    description: "Official resources from OSI about open source software and licensing.",
    url: "https://opensource.org/resources"
  },
  {
    title: "Getting Started With Contributing",
    description: "Comprehensive guide on how to start contributing to open source projects effectively.",
    url: "https://stackoverflow.blog/2020/08/03/getting-started-with-contributing-to-open-source/"
  },
  {
    title: "How to Contribute to Open Source",
    description: "Practical tips and strategies for contributing to open source projects.",
    url: "https://www.makeuseof.com/how-to-contribute-to-open-source-projects/"
  },
  {
    title: "Open Source Agenda",
    description: "Discover and explore the best free open source software projects available.",
    url: "https://www.opensourceagenda.com/"
  }
]

const OpenSourceDocumentation: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
    >
      <h2 className="mb-4 text-2xl font-bold text-gray-900">
        Open Source Documentation
      </h2>
      <p className="mb-6 text-gray-600">
        Essential resources and documentation to help you understand and contribute to open source projects effectively.
      </p>

      <div className="space-y-4">
        {documentations.map((doc, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <a
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-white">
                {doc.title}
              </h3>
              <p className="mt-2 text-sm text-gray-300 opacity-90 transition-opacity group-hover:opacity-100">
                {doc.description}
              </p>
              <div className="mt-4 flex items-center text-sm text-modern-purple">
                <span className="font-medium">Read Documentation</span>
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

export default OpenSourceDocumentation

