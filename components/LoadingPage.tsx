import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const LoadingPage = () => {
  const router = useRouter()

  useEffect(() => {
    //* Redirect to home page after 2 seconds
    const timeout = setTimeout(() => {
      router.push('/')
    }, 3000)

    return () => clearTimeout(timeout)
  }, [router])

  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-8"
        >
          <img
            src="/fork-commit-merge-logo.jpg"
            alt="FCM Logo"
            className="w-24 h-24 mx-auto"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold mb-4 text-modern-purple"
        >
          Welcome to Fork, Commit, Merge
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center items-center space-x-2"
        >
          <div className="w-2 h-2 bg-modern-purple rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
          <div className="w-2 h-2 bg-modern-purple rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-2 bg-modern-purple rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-4 text-gray-600 dark:text-gray-400"
        >
          Redirecting you to the homepage...
        </motion.p>
      </motion.div>
    </div>
  )
}

export default LoadingPage
