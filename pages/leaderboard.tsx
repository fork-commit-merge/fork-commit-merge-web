import React from 'react'
import { LeaderBoard } from '../components/leaderboard/LeaderBoard'
import Stars from '../components/leaderboard/Stars'

const LeaderBoardPage: React.FC = () => {
  return (
    <div className='bg-primary min-h-screen'>
      <div
        className='w-full bg-cover bg-center'
        style={{ backgroundImage: "url('/leaderboard.png')" }}
      >
        <div className='flex flex-col items-center justify-center p-24 text-center text-white'>
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
