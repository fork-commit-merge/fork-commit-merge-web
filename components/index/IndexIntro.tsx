import Link from 'next/link'
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
    return issueCount;
  }

  return (
    <>
      <div className='bg-primary w-full pb-10 pt-6 text-slate-50'>
        <div className='mx-auto max-w-2xl'>
          <h2 className='my-4 text-4xl font-bold'>
            About the Fork, Commit, Merge project
          </h2>

          <p className='pt-8 text-xl leading-7'>
            If you have already made some contributions to our Fork, Commit,
            Merge repo, you can{' '}
            <Link href='/login' className='underline hover:text-blue-500'>
              Login
            </Link>{' '}
            to see all of your contributions and which issues you have already
            solved. It makes it easier to keep track of your progress and see
            how you have improved your skills.
          </p>
          <p className='pt-8 text-xl leading-7'>
            &quot;Fork, Commit, Merge&quot; is an educational and practical
            project aimed at helping developers - both newcomers and seasoned -
            improve their skills in open-source contribution, problem-solving,
            finding bugs, testing, and much more in {displayIssueCount()}{' '}
            individual issues encompassing various programming languages,
            libraries and frameworks.
            <br />
            <br />
            Here are some key aspects of the repository that make it unique and
            enriching for every developer:
          </p>
        </div>
      </div>
    </>
  )
}

export default IndexIntro
