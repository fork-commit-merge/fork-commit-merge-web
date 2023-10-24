/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { badgesData } from '../data/badgesData'

const Badges: React.FC = () => {
  return (
    <>
      <div className='mx-auto mb-6 flex max-w-4xl flex-wrap items-center justify-center'>
        {badgesData.map((badge, index) => (
          <img
            key={index}
            src={badge.src}
            alt={badge.alt}
            className={`mb-1 mr-1 animate-wave-scale`}
            style={{ animationDelay: `${index * 100}ms` }}
          />
        ))}
      </div>
    </>
  )
}

export default Badges
