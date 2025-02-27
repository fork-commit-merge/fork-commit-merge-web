/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { fetchIssueCount } from '../../utils/fetchIssueCount'

const IndexIntro: React.FC = () => {
  const [issueCount, setIssueCount] = useState<number | null>(null)

  useEffect(() => {
    fetchIssueCount().then(count => setIssueCount(count))
  }, [])

  const displayIssueCount = () => {
    if (issueCount === null || isNaN(issueCount)) {
      return 'several'
    }
    return issueCount
  }

  return (
    <div className='bg-primary w-full pb-10 pt-6 '>
      <div className='mx-auto max-w-2xl'>
        <h2 className='my-4 text-4xl font-bold'>
          About the Fork, Commit, Merge project
        </h2>

        <p className='py-8 text-xl leading-7'>
          &quot;Fork, Commit, Merge&quot; is an educational and practical
          project aimed at helping developers - both newcomers and seasoned -
          improve their skills in open-source contribution, problem-solving,
          finding bugs, testing, and much more in{' '}
          {/* <span className='text-green-400'>{displayIssueCount()} </span> */}
          <span className='text-green-400'>132 </span>
          individual issues encompassing various programming languages,
          libraries and frameworks.
        </p>
        <p className='pb-4 text-xl leading-7'>
          The project is open to everyone and anyone who wants to learn and
          improve their skills in open-source contribution. The issues are
          designed to be beginner-friendly and are accompanied by detailed
          guides and resources to help you solve them. You can find the issues
          in the{' '}
          <Link
            href='https://github.com/nikohoffren/fork-commit-merge/issues'
            className='text-blue-300 underline hover:text-blue-500'
            target='blank'
          >
            Issues
          </Link>{' '}
          section of the repository. Issues are divided into three categories;
          Easy, Medium and Hard. Here is an example of an Easy level issue in
          TypeScript:
        </p>

        <Image
          src='/typescript-easy.png'
          alt='TypeScript - Easy issue example'
          width='600'
          height='600'
          className='mx-auto rounded-xl'
          unoptimized
        />

        <p className='pt-4 text-xl leading-7'>
          Here, the task is to add the necessary return statement to the greet
          function so that it returns a greeting message. After you are done,
          you can simply make a pull request and wait for it to be reviewed and
          merged, or if there are some changes needed to be made, you will be
          asked to make the changes to fix the task.
          <br />
          After your pull request has been merged, bot will revert the changes
          made to the repository so the issue is ready for the next contributor.
          You will also be added to the list of contributors in both, the README
          of the repository, and this website.
        </p>
        <hr className='my-6' />
        {/* <p className='pt-2 text-xl leading-7'>
          If you have already made some contributions to our Fork, Commit, Merge
          repo, you can check out the{' '}
          <Link
            href='/dashboard'
            className='text-blue-300 underline hover:text-blue-500'
          >
            Dashboard
          </Link>{' '}
          to see all of your contributions and which issues you have already
          solved. It makes it easier to keep track of your progress and see how
          you have improved your skills.
        </p> */}
        <p className='pt-4 text-xl leading-7'>
          If you want, instead of the educational repository, you can also
          contribute to this actual website by adding new issues, fixing typos,
          or adding new features. Feel free to create a new issue or make a pull
          request{' '}
          <Link
            href='https://github.com/nikohoffren/fork-commit-merge-web'
            className='text-blue-300 underline hover:text-blue-500'
            target='blank'
          >
            here
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default IndexIntro
