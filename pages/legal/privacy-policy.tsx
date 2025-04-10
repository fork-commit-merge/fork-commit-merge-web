import { motion } from 'framer-motion'

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

const PrivacyPolicy: React.FC = () => {
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
              Privacy <span className='text-modern-purple'>Policy</span>
            </h1>
            <p className='mx-auto mt-6 max-w-2xl text-lg text-gray-600'>
              Learn about how we handle your data and protect your privacy.
            </p>
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
                  1. Introduction
                </h2>
                <p className='mb-6 text-gray-600'>
                  Welcome to Fork, Commit, Merge (forkcommitmerge.dev). This
                  Privacy Policy governs your use of our website. This SERVICE
                  is provided by Fork, Commit, Merge at no cost and is intended
                  for use as is.
                </p>

                <h2 className='mb-6 text-2xl font-bold text-gray-900'>
                  2. Data Collection
                </h2>
                <p className='mb-4 text-gray-600'>
                  We collect the following data if you choose to login with your
                  GitHub credentials to our platform:
                </p>
                <ul className='mb-6 list-disc pl-5 text-gray-600'>
                  <li>Username</li>
                  <li>Email</li>
                  <li>Name</li>
                </ul>

                <h2 className='mb-6 text-2xl font-bold text-gray-900'>
                  3. How We Use Your Data
                </h2>
                <p className='mb-4 text-gray-600'>We use your data to:</p>
                <ul className='mb-6 list-disc pl-5 text-gray-600'>
                  <li>
                    Facilitate your learning experience about contributing to
                    open-source.
                  </li>
                  <li>
                    Search for the number of issues you have made in our
                    repository by looking at all the closed (merged) pull
                    requests.
                  </li>
                </ul>

                <h2 className='mb-6 text-2xl font-bold text-gray-900'>
                  4. Data Storage
                </h2>
                <p className='mb-6 text-gray-600'>
                  We use GitHub's OAuth2 protocol to authenticate you. We do not
                  store your password or sensitive information. We only store
                  basic information about your contributions to our repository
                  to track your progress.
                </p>

                <h2 className='mb-6 text-2xl font-bold text-gray-900'>
                  5. Data Sharing
                </h2>
                <p className='mb-6 text-gray-600'>
                  We do not share your data with third parties. We do not sell
                  your data to third parties. We do not use your data for
                  marketing purposes.
                </p>

                <h2 className='mb-6 text-2xl font-bold text-gray-900'>
                  6. Cookie Policy
                </h2>
                <p className='mb-6 text-gray-600'>
                  We do not use cookies on our website.
                </p>

                <h2 className='mb-6 text-2xl font-bold text-gray-900'>
                  7. Changes To This Privacy Policy
                </h2>
                <p className='mb-6 text-gray-600'>
                  We may update this Privacy Policy in the future. You are
                  advised to review this page periodically for any changes. We
                  will notify you of any changes by posting the new Privacy
                  Policy on this page. These changes are effective immediately
                  after they are posted on this page.
                </p>

                <h2 className='mb-6 text-2xl font-bold text-gray-900'>
                  8. Contact Us
                </h2>
                <p className='mb-6 text-gray-600'>
                  If you have any questions about this Privacy Policy, please
                  contact us by email: niko.hoffren@gmail.com
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
