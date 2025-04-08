import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { contributorData } from '../../components/data/contributorData'

const Contributors: FC = () => {
  return (
    <div className='bg-white'>
      <div className='modern-container'>
        <div className='py-16 sm:py-24'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
              Our Amazing{' '}
              <span className='text-modern-purple'>Contributors</span>
            </h1>
            <p className='mx-auto mt-6 max-w-2xl text-lg text-gray-600'>
              Meet the incredible developers who have contributed to our open
              source community
            </p>
          </div>

          <div className='mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {contributorData.map(contributor => (
              <div
                key={contributor.id}
                className='flex flex-col items-center rounded-lg bg-white p-6 shadow-md transition-all duration-200 hover:shadow-lg'
              >
                <Link
                  href={contributor.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group relative'
                >
                  <Image
                    src={contributor.avatar}
                    alt={`${contributor.name}'s avatar`}
                    width={120}
                    height={120}
                    className='rounded-full transition-transform duration-200 group-hover:scale-105'
                    unoptimized
                  />
                </Link>
                <h3 className='mt-4 text-lg font-semibold text-gray-900'>
                  {contributor.name}
                </h3>
                <Link
                  href={contributor.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mt-2 text-modern-purple hover:text-modern-purple/80'
                >
                  View Profile
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contributors
