import { useState } from 'react'
import Image from 'next/image'

type Contributor = {
  id: string
  url: string
  avatar: string
  name: string
}

type ContributorsProps = {
  contributors: Contributor[]
}

export const Contributors: React.FC<ContributorsProps> = ({ contributors }) => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({})

  const handleImageError = (contributorId: string) => {
    setFailedImages(prev => ({
      ...prev,
      [contributorId]: true
    }))
  }

  return (
    <div className='contributor-images'>
      {contributors.map(contributor => (
        <a
          key={contributor.id}
          href={contributor.url}
          target='_blank'
          rel='noopener noreferrer'
          className='m-1 inline-block'
        >
          {failedImages[contributor.id] ? (
            //* Fallback to a simple display if image fails
            <div
              className='flex h-[20px] w-[20px] items-center justify-center rounded-full bg-gray-200 text-xs'
              title={contributor.name}
            >
              {contributor.name.charAt(0).toUpperCase()}
            </div>
          ) : (
            <Image
              src={contributor.avatar}
              alt={contributor.name}
              width={25}
              height={25}
              onError={() => handleImageError(contributor.id)}
              style={{ borderRadius: '50%' }}
              unoptimized
            />
          )}
        </a>
      ))}
    </div>
  )
}
