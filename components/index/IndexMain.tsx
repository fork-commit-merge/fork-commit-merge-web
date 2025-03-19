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
    <div className='w-full'>
      <div className='px-4 text-center'>
        <h1 className='font-primary text-5xl font-bold pt-4'>
          Welcome to Fork, Commit, Merge
        </h1>
        <p className='font-primary mb-7 mt-4 text-2xl'>
          Your one-stop resource hub for mastering GitHub contributions
        </p>
        <Badges />
      </div>

      <div className='bg-primary w-full'>
        <div className='w-full pt-10 pb-6'>
          <p className='font-primary text-center text-2xl leading-8'>
            Become a part of our community of over 700 inspiring developers
            <span className='hidden md:inline'><br /></span>
            {' '}who have already contributed to this project!
          </p>
        </div>
        <div className="pb-4">
          <TopThreeContributors />
        </div>

        <React.Suspense>
          <div className='hidden md:block'>
            <div className='mx-auto max-w-5xl px-8 pb-8'>
              <Contributors contributors={contributorData} />
            </div>
          </div>
        </React.Suspense>
      </div>

      <div className='bg-secondary w-full mb-4'>
        <div className='mx-auto max-w-4xl py-6'>
          <div className='px-4 text-center text-xl font-light'>
            <code>Fork, Commit, Merge</code> is your one-stop resource hub for
            mastering GitHub contributions! Whether you&apos;re a novice coder
            or an experienced developer, our comprehensive guides are designed
            to streamline your GitHub journey. We delve into everything from
            basic Git commands to intricate pull request processes, making
            collaboration seamless and efficient.
            <br />
            <br />
            Learn the ins and outs of forking, committing, and merging with our
            easy-to-follow tutorials and expert advice. At Fork Commit Merge,
            we&apos;re passionate about empowering you to contribute confidently
            and effectively to the open-source world.
            <br />
            <br />
            Let&apos;s code, collaborate, and create together!
          </div>
          <div className='mb-3 mt-10 text-center'>
            <Link
              href='https://github.com/nikohoffren/fork-commit-merge'
              target='blank'
              className='font-primary themed-button my-8 transform rounded-md px-8 pb-5 pt-4 text-2xl font-semibold tracking-wider text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105'
            >
              GET STARTED
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexMain







