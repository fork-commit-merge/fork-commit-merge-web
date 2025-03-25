import React from 'react'
import { LeaderBoard } from '../components/leaderboard/LeaderBoard'
import Stars from '../components/leaderboard/Stars'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const LeaderBoardPage: React.FC = () => {
  const { user, isLoaded } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (isLoaded && !user) {
      router.push('/dashboard')
    }
  }, [isLoaded, user, router])

  if (!isLoaded || !user) {
    return null
  }

  return (
    <div className='bg-primary min-h-screen'>
      <div
        className='page-header-background'
        style={{ backgroundImage: "url('/fcm-background-image.png')" }}
      >
        <div className='page-header-content'>
          <h1 className='mb-6 text-center text-4xl font-bold'>Leaderboard</h1>
        </div>
      </div>
      <div className='bg-primary flex min-h-screen flex-col'>
        <div className='flex flex-grow items-center justify-center text-center'>
          <div className='max pb-6'>
            <h2 className='pt-10 text-2xl'>
              Top 20 Contributors by Solved Issues
            </h2>
            <p className='pb-10 pt-2 italic text-gray-400'>
              Bot will update this list once a week.
            </p>
            <LeaderBoard />
            <Stars />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeaderBoardPage
