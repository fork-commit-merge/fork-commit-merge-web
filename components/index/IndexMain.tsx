/* eslint-disable react/jsx-no-undef */
import Link from 'next/link'
import { Contributors } from './Contributors'
import { TopThreeContributors } from './TopThreeContributors'
import Badges from './Badges'
import { contributorData } from '../data/contributorData'
import React, { useEffect, useState } from 'react'
import { fetchContributorsCount } from '../../utils/fetchContributorsCount'

const IndexMain: React.FC = () => {
  const [contributorsCount, setContributorsCount] = useState<number | null>(
    null
  )

  useEffect(() => {
    fetchContributorsCount().then(count => setContributorsCount(count))
  }, [])

  const displayContributorsCount = () => {
    if (contributorsCount === null || isNaN(contributorsCount)) {
      return 'several'
    }
    return contributorsCount
  }

  return (
    <div className='my-6 min-w-full'>
      <h1 className='font-primary text-5xl font-bold '>
        Welcome to Fork, Commit, Merge
      </h1>
      <p className='font-primary mb-7 mt-4 text-2xl '>
        Your one-stop resource hub for mastering GitHub contributions
      </p>
      <Badges />
      <div className='bg-primary w-full pb-16 pt-4 text-center'>
        <div className='mx-auto my-5 max-w-2xl text-xl font-light '>
          <p className='font-primary mb-8 mt-8 text-2xl leading-8'>
            Become a part of our thriving community of{' '}
            <span
              className='text-green-400
            '
            >
              {displayContributorsCount()}
            </span>{' '}
            inspiring developers who have already contributed to this project!
          </p>
        </div>
        <TopThreeContributors />

        <React.Suspense>
          <div className='mx-auto my-5 max-w-4xl text-xl font-light '>
            <Contributors contributors={contributorData} />
          </div>
        </React.Suspense>
      </div>
      <div className='bg-secondary w-full py-6'>
        <div className='mx-auto my-5 max-w-2xl text-xl font-light '>
          <code>Fork, Commit, Merge</code> is your one-stop resource hub for
          mastering GitHub contributions! Whether you&apos;re a novice coder or
          an experienced developer, our comprehensive guides are designed to
          streamline your GitHub journey. We delve into everything from basic
          Git commands to intricate pull request processes, making collaboration
          seamless and efficient.
          <br />
          <br />
          Learn the ins and outs of forking, committing, and merging with our
          easy-to-follow tutorials and expert advice. At Fork Commit Merge,
          we&apos;re passionate about empowering you to contribute confidently
          and effectively to the open-source world.
          <br />
          <br />
          Let&apos;s <span className="text-green-500">code</span>, <span className="text-blue-500">collaborate</span>, and <span className="text-orange-500">create</span> together!
        </div>
        <div className='mb-3 mt-10'>
          <Link
            href='https://github.com/nikohoffren/fork-commit-merge'
            target='blank'
            className='font-primary my-8 transform rounded-md bg-slate-900 px-8 pb-5 pt-4 text-2xl font-semibold tracking-wider  shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-slate-800'
          >
            GET STARTED
          </Link>
        </div>
      </div>
    </div>
  )
}

export default IndexMain
