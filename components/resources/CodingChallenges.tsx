import React from "react"
import { motion } from "framer-motion"

interface Challenge {
  name: string
  description: string
  url: string
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "All Levels"
}

const challenges: Challenge[] = [
  {
    name: "HackerRank",
    description: "Practice coding, prepare for interviews, and get hired.",
    url: "https://www.hackerrank.com/",
    difficulty: "All Levels"
  },
  {
    name: "LeetCode",
    description: "Enhance your skills, expand your knowledge and prepare for technical interviews.",
    url: "https://leetcode.com/",
    difficulty: "Intermediate"
  },
  {
    name: "CodeWars",
    description: "Improve your skills by training with others on real code challenges.",
    url: "https://www.codewars.com/",
    difficulty: "All Levels"
  },
  {
    name: "CodeChef",
    description: "A platform for aspiring programmers to learn and compete.",
    url: "https://www.codechef.com/",
    difficulty: "Advanced"
  }
]

const CodingChallenges: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
    >
      <h2 className="mb-4 text-2xl font-bold text-gray-900">
        Coding Challenges and Practice
      </h2>
      <p className="mb-6 text-gray-600">
        Hone your coding skills and prepare for technical interviews with these challenging platforms.
      </p>

      <div className="space-y-4">
        {challenges.map((challenge, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <a
              href={challenge.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">
                  {challenge.name}
                </h3>
                <span className="rounded-full bg-modern-purple/10 px-3 py-1 text-xs font-medium text-modern-purple">
                  {challenge.difficulty}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-300 opacity-90 transition-opacity group-hover:opacity-100">
                {challenge.description}
              </p>
              <div className="mt-4 flex items-center text-sm text-modern-purple">
                <span className="font-medium">Start Practicing</span>
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

export default CodingChallenges

