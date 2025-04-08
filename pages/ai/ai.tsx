import { motion } from 'framer-motion'
import AIContent from '../../components/ai/AIContent'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function AI() {
  return (
    <div className='bg-white'>
      <div className='modern-container'>
        <div className='py-16 sm:py-24'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-center'
          >
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
              AI Development <span className='text-modern-purple'>Tools</span>
            </h1>
            <p className='mx-auto mt-6 max-w-2xl text-lg text-gray-600'>
              Discover powerful AI tools and best practices to enhance your
              development workflow.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial='hidden'
            animate='show'
            className='mt-16 flex justify-center'
          >
            <motion.div variants={item} className='w-full max-w-4xl'>
              <AIContent />
            </motion.div>
          </motion.div>

          <motion.div
            variants={container}
            initial='hidden'
            animate='show'
            className='mt-16 flex justify-center'
          >
            <motion.div variants={item} className='w-full max-w-4xl'>
              <div className='rounded-lg bg-gray-50 p-8 shadow-sm'>
                <h2 className='mb-6 text-2xl font-bold text-gray-900'>
                  Best Practices for Using AI Tools
                </h2>
                <ul className='grid gap-4 text-gray-600 sm:grid-cols-2'>
                  <li className='flex items-start'>
                    <svg
                      className='mr-2 h-6 w-6 flex-shrink-0 text-modern-purple'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    Always review and understand AI-generated code
                  </li>
                  <li className='flex items-start'>
                    <svg
                      className='mr-2 h-6 w-6 flex-shrink-0 text-modern-purple'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    Test AI suggestions thoroughly before implementation
                  </li>
                  <li className='flex items-start'>
                    <svg
                      className='mr-2 h-6 w-6 flex-shrink-0 text-modern-purple'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    Use AI as a learning tool, not just a code generator
                  </li>
                  <li className='flex items-start'>
                    <svg
                      className='mr-2 h-6 w-6 flex-shrink-0 text-modern-purple'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    Keep security and privacy in mind when sharing code
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
