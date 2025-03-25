import { useRouter } from 'next/router'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { fetchGitHubUsername } from '../utils/fetchClosedPullRequests'
import Spinner from '../components/Spinner'
import Image from 'next/image'

async function fetchStoredPullRequests(username) {
  const res = await fetch(`/api/getStoredPullRequests?username=${username}`)
  const data = await res.json()
  return data
}

export default function Dashboard() {
  const { user } = useUser()
  const router = useRouter()
  const [pullRequests, setPullRequests] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [githubUsername, setGithubUsername] = useState('')

  useEffect(() => {
    if (!user) {
      router.push('/sign-in')
      return
    }

    const fetchData = async () => {
      setIsLoading(true)
      try {
        const username = await fetchGitHubUsername(user.emailAddresses)
        setGithubUsername(username)
        const storedPRs = await fetchStoredPullRequests(username)
        setPullRequests(storedPRs.pullRequests || [])
        const response = await axios.get(
          `/api/closedPullRequests?username=${username}`
        )
        setPullRequests(response.data)
      } catch (error) {
        console.error('Error fetching pull requests:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [user, router])

  if (!user) {
    return null
  }

  return (
    <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
      {/* User Profile Section */}
      <div className='mb-8 rounded-lg bg-slate-800 p-6 shadow-lg'>
        <div className='flex items-center space-x-6'>
          <div className='relative h-24 w-24'>
            <Image
              src={user.imageUrl}
              alt='Profile'
              fill
              className='rounded-full border-4 border-slate-600 object-cover'
            />
          </div>
          <div>
            <h2 className='text-2xl font-bold text-white'>{user.fullName}</h2>
            <p className='text-slate-400'>GitHub: {githubUsername}</p>
            <p className='text-slate-400'>
              {user.primaryEmailAddress?.emailAddress}
            </p>
            <div className='mt-2'>
              <span className='inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800'>
                {pullRequests.length} Contributions
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Pull Requests Section */}
      <div className='rounded-lg bg-slate-800 p-6 shadow-lg'>
        <h3 className='mb-6 text-2xl font-bold text-white'>
          Successfully Merged Pull Requests
        </h3>

        {isLoading ? (
          <div className='flex h-64 items-center justify-center'>
            <Spinner />
          </div>
        ) : pullRequests.length > 0 ? (
          <div className='overflow-hidden rounded-lg border border-slate-700'>
            <div className='overflow-x-auto'>
              <table className='min-w-full divide-y divide-slate-700'>
                <thead className='bg-slate-900'>
                  <tr>
                    <th
                      scope='col'
                      className='px-6 py-4 text-left text-sm font-semibold text-slate-300'
                    >
                      Title
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-4 text-left text-sm font-semibold text-slate-300'
                    >
                      Issue
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-4 text-left text-sm font-semibold text-slate-300'
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-slate-700 bg-slate-800'>
                  {pullRequests.map((pr, index) => (
                    <tr
                      key={index}
                      className='transition-colors hover:bg-slate-700'
                    >
                      <td className='whitespace-normal px-6 py-4 text-sm text-slate-300'>
                        {pr.title}
                      </td>
                      <td className='whitespace-normal px-6 py-4 text-sm text-slate-300'>
                        {pr.issue}
                      </td>
                      <td className='whitespace-nowrap px-6 py-4 text-sm'>
                        <span className='inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800'>
                          Merged
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className='py-12 text-center'>
            <p className='text-slate-400'>No pull requests found.</p>
          </div>
        )}
      </div>
    </div>
  )
}
