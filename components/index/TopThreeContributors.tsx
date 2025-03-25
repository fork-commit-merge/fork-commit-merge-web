import React, { useState, useEffect, FC } from 'react'
import Image from 'next/image'
import { StarFilled } from '@ant-design/icons'

export type Contributor = {
  username: string
  contributions: number
  avatarUrl: string
  rank?: number
}

const TopThreeContributors: FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [contributors, setContributors] = useState<Contributor[]>([])
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchContributors = async () => {
      setIsLoading(true)
      try {
        const response = await fetch('/api/topThreeUsers', {
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const fetchedData = await response.json()
        console.log('Raw API response:', fetchedData)

        if (Array.isArray(fetchedData) && fetchedData.length > 0) {
          const mappedData = fetchedData.map((contributor, index) => ({
            ...contributor,
            rank: index + 1
          }))

          console.log('Mapped contributors data:', mappedData)
          setContributors(mappedData)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
        console.error(
          'Error details:',
          error instanceof Error ? error.message : 'Unknown error'
        )
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchContributors()
  }, [])

  if (isLoading || isError || !contributors.length) {
    return null
  }

  console.log('Rendering with contributors:', contributors)

  return (
    <div className='flex flex-wrap justify-center'>
      {contributors.map(contributor => (
        <div key={contributor.username} className='contributor-images relative'>
          <a
            href={`https://github.com/${contributor.username}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src={contributor.avatarUrl}
              width={80}
              height={80}
              alt={`GitHub avatar of ${contributor.username}`}
              className='px-1'
              unoptimized
              onError={e => {
                const imgElement = e.currentTarget as HTMLImageElement
                imgElement.src = `https://github.com/${contributor.username}.png`
              }}
            />
          </a>
          {contributor.rank === 1 && (
            <StarFilled
              style={{
                position: 'absolute',
                top: 1,
                right: -5,
                fontSize: 30,
                color: 'gold'
              }}
            />
          )}
          {contributor.rank === 2 && (
            <StarFilled
              style={{
                position: 'absolute',
                top: 1,
                right: -5,
                fontSize: 30,
                color: 'silver'
              }}
            />
          )}
          {contributor.rank === 3 && (
            <StarFilled
              style={{
                position: 'absolute',
                top: 1,
                right: -5,
                fontSize: 30,
                color: 'var(--color-bronze)'
              }}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export { TopThreeContributors }
