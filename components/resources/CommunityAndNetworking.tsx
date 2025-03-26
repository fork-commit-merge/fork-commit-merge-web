import React from "react"
import { motion } from "framer-motion"

interface Community {
  name: string
  description: string
  url: string
  type: "Forum" | "Social" | "Q&A" | "Community"
}

const communities: Community[] = [
  {
    name: "Stack Overflow",
    description: "Q&A platform for programmers to learn and share knowledge.",
    url: "https://stackoverflow.com/",
    type: "Q&A"
  },
  {
    name: "Dev.to",
    description: "Community of software developers sharing ideas and helping each other grow.",
    url: "https://dev.to/",
    type: "Community"
  },
  {
    name: "Reddit Programming",
    description: "Programming discussions and news on Reddit.",
    url: "https://www.reddit.com/r/programming/",
    type: "Forum"
  },
  {
    name: "Discord Developer Communities",
    description: "Join various programming communities on Discord.",
    url: "https://discord.com/",
    type: "Social"
  }
]

const CommunityAndNetworking: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
    >
      <h2 className="mb-4 text-2xl font-bold text-gray-900">
        Community and Networking
      </h2>
      <p className="mb-6 text-gray-600">
        Connect with fellow developers, share knowledge, and grow together in these communities.
      </p>

      <div className="space-y-4">
        {communities.map((community, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <a
              href={community.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">
                  {community.name}
                </h3>
                <span className="rounded-full bg-modern-purple/10 px-3 py-1 text-xs font-medium text-modern-purple">
                  {community.type}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-300 opacity-90 transition-opacity group-hover:opacity-100">
                {community.description}
              </p>
              <div className="mt-4 flex items-center text-sm text-modern-purple">
                <span className="font-medium">Join Community</span>
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

export default CommunityAndNetworking


