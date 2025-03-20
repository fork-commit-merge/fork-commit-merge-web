import React, { useState, useEffect, FC } from 'react'
import axios, { AxiosError } from 'axios'
import Image from 'next/image'
import { StarFilled } from '@ant-design/icons'

export type Contributor = {
  id: string
  url: string
  avatar: string
  name: string
  rank?: number
}

const TopThreeContributors: FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [contributors, setContributors] = useState<Contributor[]>([])
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchContributors = async () => {
      setIsLoading(true)
      setIsError(false)
      console.log('Starting to fetch top three users...');

      try {
        const response = await axios.get('/api/topThreeUsers', {
          timeout: 8000
        });

        console.log('Raw API response:', response.data);
        const fetchedData = response.data;

        if (Array.isArray(fetchedData) && fetchedData.length > 0) {
          // Sort the data by contributions in descending order
          const sortedData = [...fetchedData].sort((a, b) => b.contributions - a.contributions);

          const mappedData: Contributor[] = sortedData
            .filter((userStat: { username: string }) => {
              const filtered = userStat.username !== 'dependabot' &&
                userStat.username !== 'dependabot[bot]' &&
                userStat.username !== 'nikohoffren';
              console.log(`Filtering ${userStat.username}: ${filtered}`);
              return filtered;
            })
            .map((userStat: { username: any; avatarUrl: any }, index: number) => ({
              id: userStat.username,
              url: `https://github.com/${userStat.username}`,
              avatar: userStat.avatarUrl,
              name: userStat.username,
              rank: index + 1
            }));

          console.log('Mapped contributors data:', mappedData);
          setContributors(mappedData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        if (error instanceof AxiosError) {
          console.error('Error details:', error.response?.data || error.message);
        } else {
          console.error('Error details:', error instanceof Error ? error.message : 'Unknown error');
        }
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContributors();
  }, []);

  if (!contributors.length) {
    return null;
  }

  console.log('Rendering with contributors:', contributors);

  return (
    <div className='flex flex-wrap justify-center'>
      {contributors.map(contributor => (
        <div key={contributor.id} className='contributor-images relative'>
          <a href={contributor.url} target='_blank' rel='noopener noreferrer'>
            <Image
              src={contributor.avatar}
              width={80}
              height={80}
              alt={contributor.name}
              className='px-1'
              unoptimized
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







