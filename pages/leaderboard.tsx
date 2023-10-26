import React from 'react'
import { LeaderBoard } from '../components/leaderboard/LeaderBoard'
import Stars from '../components/leaderboard/Stars'

const LeaderBoardPage: React.FC = () => {
  return (
    <div className='bg-primary  flex min-h-screen flex-col'>
      <div className='flex flex-grow items-center justify-center text-center'>
        <div className='max pb-6'>
          <h1 className='pt-10 text-4xl'>Leaderboard</h1>
          <h2 className='pt-10 text-2xl'>
            Top 20 Contributors by Solved Issues
          </h2>
          <p className='pb-10 pt-2 text-gray-400 italic'>
            Bot will update this list once in every 24 hours.
          </p>
          <LeaderBoard />
          <Stars />
        </div>
      </div>
    </div>
  )
}

export default LeaderBoardPage
