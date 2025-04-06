/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import { useEffect, useState } from 'react'
import { getTopContributors, getOtherContributors } from '../utils/contributors'
import { Contributor } from '../types/contributor'
import { motion } from 'framer-motion'
import Link from 'next/link'

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

export default function Home() {
  const [topContributors, setTopContributors] = useState<Contributor[]>([])
  const [otherContributors, setOtherContributors] = useState<Contributor[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const [top, other] = await Promise.all([
          getTopContributors(),
          getOtherContributors()
        ])
        setTopContributors(top)
        setOtherContributors(other)
      } catch (error) {
        console.error('Error fetching contributors:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchContributors()
  }, [])

  return (
    <>
      <Head>
        <title>Fork Commit Merge - Learn to Contribute to Open Source</title>
        <meta
          name='description'
          content='Learn how to contribute to open source projects and explore comprehensive coding resources. Start your journey in open source development today.'
        />
      </Head>

      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Features />
        </motion.div>

        {/* Project Description Section */}
        <motion.section
          className='bg-white py-16'
          variants={container}
          initial='hidden'
          animate='show'
        >
          <motion.div
            variants={item}
            className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
          >
            <div className='modern-container'>
              <div className='mx-auto max-w-2xl lg:text-center'>
                <h2 className='text-3xl font-semibold leading-7 text-modern-purple'>
                  Become a part of our community of over 700 inspiring
                  developers who have already contributed to this project!
                </h2>
                <p className='mt-6 text-lg leading-8 text-gray-600'>
                  "Fork, Commit, Merge" is an educational and practical project
                  aimed at helping developers - both newcomers and seasoned -
                  improve their skills in open-source contribution,
                  problem-solving, finding bugs, testing, and much more in{' '}
                  <span className='text-green-400'>135</span> individual issues
                  encompassing various programming languages, libraries and
                  frameworks.
                </p>
                <p className='mt-6 text-lg leading-8 text-gray-600'>
                  The project is open to everyone and anyone who wants to learn
                  and improve their skills in open-source contribution. The
                  issues are designed to be beginner-friendly and are
                  accompanied by detailed guides and resources to help you solve
                  them. You can find the issues in the Issues section of the
                  repository. Issues are divided into three categories; Easy,
                  Medium and Hard.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Contributors Section */}
        <section className='bg-gray-50 py-16'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='text-center'>
              <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl'>
                Our Top Contributors
              </h2>
            </div>

            {/* Top 3 Contributors */}
            <motion.div
              variants={item}
              className='mt-12 grid gap-8 md:grid-cols-3'
            >
              {topContributors.map((contributor, index) => (
                <motion.a
                  key={contributor.id}
                  href={contributor.html_url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='transform rounded-lg bg-white p-6 shadow-lg transition-transform duration-200 hover:scale-105'
                  variants={item}
                >
                  <div className='flex items-center'>
                    <img
                      src={contributor.avatar_url}
                      alt={contributor.login}
                      className='h-16 w-16 rounded-full'
                    />
                    <div className='ml-4'>
                      <h3 className='text-lg font-semibold text-gray-900'>
                        {contributor.login}
                      </h3>
                      <p className='text-sm text-gray-500'>
                        {contributor.contributions} contributions
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Other Contributors */}
            <div className='mt-16'>
              <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                {otherContributors.map((contributor, index) => (
                  <a
                    key={`${contributor.id}-${index}`}
                    href={contributor.html_url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='rounded-lg bg-white p-4 shadow transition-all duration-200 hover:scale-105 hover:shadow-md'
                  >
                    <div className='flex items-center'>
                      <img
                        src={contributor.avatar_url}
                        alt={contributor.login}
                        className='h-10 w-10 rounded-full'
                      />
                      <div className='ml-3'>
                        <h4 className='text-sm font-medium text-gray-900'>
                          {contributor.login}
                        </h4>
                        <p className='text-xs text-gray-500'>
                          {contributor.contributions} contributions
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
                {otherContributors.length % 3 !== 0 && (
                  <div className='rounded-lg bg-white p-4 opacity-0 shadow'></div>
                )}
              </div>
            </div>
            <div className='mt-8 text-center'>
              <Link
                href='/contributors'
                className='inline-flex items-center justify-center rounded-md bg-modern-purple px-6 py-3 text-base font-medium text-white shadow-sm transition-colors duration-200 hover:bg-modern-purple/90'
              >
                View All Contributors
                <svg
                  className='ml-2 h-5 w-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M13 7l5 5m0 0l-5 5m5-5H6'
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />
      </main>
    </>
  )
}
