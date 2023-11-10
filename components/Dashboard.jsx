import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { fetchGitHubUsername } from '../utils/fetchClosedPullRequests'

async function fetchStoredPullRequests(username) {
  const res = await fetch(`/api/getStoredPullRequests?username=${username}`)
  const data = await res.json()

  return data
}

export default function Dashboard() {
  const user = useUser()
  const [pullRequests, setPullRequests] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        setIsLoading(true)
        try {
          const username = await fetchGitHubUsername(user.emailAddress)
          const storedPRs = await fetchStoredPullRequests(username)
          setPullRequests(storedPRs.pullRequests || [])
          const response = await axios.get(
            `/api/closedPullRequests?username=${username}`
          )
          setPullRequests(response.data)
        } catch (error) {
          console.error('Error:', error)
        } finally {
          setIsLoading(false)
        }
      }
    }
    fetchData()
  }, [])

  if (user) {
    return (
      <div className='-50 text-center'>
        {isLoading && (
          <div className='flex h-[200px] items-center justify-center'>
            <div className='spinner'></div>
          </div>
        )}

        {pullRequests.length > 0 && (
          <div className='py-4'>
            <hr className='my-6' />
            <h3 className='py-6 text-2xl'>
              Successfully Merged Pull Requests:
            </h3>
            <table className='min-w-full bg-slate-900'>
              <thead>
                <tr>
                  <th className='border-b border-gray-200 bg-gray-900 px-4 py-2 text-left text-xs font-medium uppercase leading-4 tracking-wider '>
                    Title
                  </th>
                  <th className='border-b border-gray-200 bg-gray-900 px-4 py-2 text-left text-xs font-medium uppercase leading-4 tracking-wider '>
                    Issue
                  </th>
                </tr>
              </thead>
              <tbody>
                {pullRequests.map((pr, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'}
                  >
                    <td className='whitespace-no-wrap px-4 py-4 text-sm leading-5 '>
                      {pr.title}
                    </td>
                    <td className='whitespace-no-wrap px-4 py-4 text-sm leading-5 '>
                      {pr.issue}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    )
  }
}
