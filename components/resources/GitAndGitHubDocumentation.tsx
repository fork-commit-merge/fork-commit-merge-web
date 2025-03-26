import React from "react"
import { motion } from "framer-motion"

interface GitResource {
  title: string
  description: string
  url: string
}

const resources: GitResource[] = [
  {
    title: "Official Git Documentation",
    description: "Comprehensive documentation covering all Git commands, concepts, and best practices.",
    url: "https://git-scm.com/doc"
  },
  {
    title: "Official GitHub Documentation",
    description: "Complete guide to using GitHub's features, workflows, and collaboration tools.",
    url: "https://docs.github.com/en"
  },
  {
    title: "Atlassian Git Tutorial",
    description: "In-depth tutorials and guides for mastering Git version control.",
    url: "https://www.atlassian.com/git/tutorials"
  },
  {
    title: "W3Schools GitHub Tutorial",
    description: "Beginner-friendly guide to getting started with GitHub and remote repositories.",
    url: "https://www.w3schools.com/git/git_remote_getstarted.asp?remote=github"
  },
  {
    title: "W3Schools Git Tutorial",
    description: "Step-by-step tutorials for learning Git fundamentals and essential commands.",
    url: "https://www.w3schools.com/git/"
  }
]

const GitAndGitHubDocumentation: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
    >
      <h2 className="mb-4 text-2xl font-bold text-gray-900">
        Git and GitHub Documentation
      </h2>
      <p className="mb-6 text-gray-600">
        Mastering Git and GitHub is fundamental for effective open-source
        contributions. The following documentation provides a deep dive into
        using Git and GitHub, including the official documentation and
        additional helpful tutorials.
      </p>

      <div className="space-y-4">
        {resources.map((resource, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-white">
                {resource.title}
              </h3>
              <p className="mt-2 text-sm text-gray-300 opacity-90 transition-opacity group-hover:opacity-100">
                {resource.description}
              </p>
              <div className="mt-4 flex items-center text-sm text-modern-purple">
                <span className="font-medium">View Documentation</span>
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

export default GitAndGitHubDocumentation

