/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import { useEffect, useState } from 'react'
import { getTopContributors, getOtherContributors } from '../utils/contributors'
import { Contributor } from '../types/contributor'

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
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Hero />
        <Features />

        {/* About Section */}
        <section className='bg-gray-50 pb-16'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='px-20 text-center'>
              <h2 className='text-2xl font-semibold leading-7 text-modern-purple'>
                Become a part of our community of over 700 inspiring developers
                who have already contributed to this project!
              </h2>
            </div>

            <div className='prose prose-lg mx-auto mt-12 text-center px-20'>
              <p>
                Fork, Commit, Merge is your one-stop resource hub for mastering
                GitHub contributions! Whether you're a novice coder or an
                experienced developer, our comprehensive guides are designed to
                streamline your GitHub journey. We delve into everything from
                basic Git commands to intricate pull request processes, making
                collaboration seamless and efficient.
              </p>
              <p>
                Learn the ins and outs of forking, committing, and merging with
                our easy-to-follow tutorials and expert advice. At Fork Commit
                Merge, we're passionate about empowering you to contribute
                confidently and effectively to the open-source world.
              </p>
              <p>Let's code, collaborate, and create together!</p>
            </div>
          </div>
        </section>

        {/* Project Description Section */}
        <section className='py-16'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='text-center'>
              <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl'>
                About the Fork, Commit, Merge project
              </h2>
            </div>

            <div className='prose prose-lg mx-auto mt-12'>
              <p>
                "Fork, Commit, Merge" is an educational and practical project
                aimed at helping developers - both newcomers and seasoned -
                improve their skills in open-source contribution,
                problem-solving, finding bugs, testing, and much more in 134
                individual issues encompassing various programming languages,
                libraries and frameworks.
              </p>
              <p>
                The project is open to everyone and anyone who wants to learn
                and improve their skills in open-source contribution. The issues
                are designed to be beginner-friendly and are accompanied by
                detailed guides and resources to help you solve them. You can
                find the issues in the Issues section of the repository. Issues
                are divided into three categories; Easy, Medium and Hard.
              </p>
            </div>
          </div>
        </section>

        {/* Contributors Section */}
        <section className='bg-gray-50 py-16'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='text-center'>
              <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl'>
                Our Top Contributors
              </h2>
            </div>

            {/* Top 3 Contributors */}
            <div className='mt-12 grid gap-8 md:grid-cols-3'>
              {topContributors.map((contributor, index) => (
                <a
                  key={contributor.id}
                  href={contributor.html_url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='transform rounded-lg bg-white p-6 shadow-lg transition-transform duration-200 hover:scale-105'
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
                </a>
              ))}
            </div>

            {/* Other Contributors */}
            <div className='mt-16'>
              <h3 className='mb-8 text-center text-2xl font-bold text-gray-900'>
                Join Our Community
              </h3>
              <p className='mb-8 text-center text-gray-600'>
                Be part of our growing community of developers who are learning
                and contributing to open source
              </p>
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
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />
      </main>
    </>
  )
}
