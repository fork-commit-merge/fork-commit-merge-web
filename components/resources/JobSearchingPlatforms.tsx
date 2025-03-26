import React from "react"
import { motion } from "framer-motion"

interface JobPlatform {
  title: string
  description: string
  url: string
}

const platforms: JobPlatform[] = [
  {
    title: "Wellfound Jobs",
    description: "Connect with innovative startups and tech companies. Find roles at companies changing the world.",
    url: "https://wellfound.com/jobs"
  },
  {
    title: "Hired",
    description: "Let companies compete for you. Get matched with tech companies and receive salary details upfront.",
    url: "https://www.hired.com/"
  },
  {
    title: "Dice",
    description: "Specialized job board for technology and engineering professionals with thousands of tech positions.",
    url: "https://www.dice.com/"
  },
  {
    title: "Upwork",
    description: "Find freelance opportunities and remote work in software development and tech consulting.",
    url: "https://www.upwork.com/work/"
  },
  {
    title: "Built In",
    description: "Discover tech jobs at startups and tech companies in major tech hubs across the country.",
    url: "https://builtin.com/"
  },
  {
    title: "Tech Ladies",
    description: "Connect women in tech with companies that value diversity and inclusion in their hiring.",
    url: "https://www.hiretechladies.com/"
  },
  {
    title: "Outreachy",
    description: "Internships in open source and open science for people subject to systemic bias in tech.",
    url: "https://www.outreachy.org/"
  }
]

const JobSearchingPlatforms: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
    >
      <h2 className="mb-4 text-2xl font-bold text-gray-900">
        Job Searching Platforms
      </h2>
      <p className="mb-6 text-gray-600">
        Looking for your next role or just curious about what's out there?
        These job searching platforms are specifically tailored for tech roles
        and can help you find your next opportunity.
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
                <span className="font-medium">View Jobs</span>
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

export default JobSearchingPlatforms

