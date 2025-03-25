import {
  getTopThreeUsersFromDb,
  storeTopThreeUsersInDb
} from '../../utils/fetchTopUsersFromDb'
import { fetchTopThreeUsersByPullRequests } from '../../utils/fetchTopThreeUsersByPullRequests'

export default async function handler(req, res) {
  res.setTimeout(60000);

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Cache-Control', 'public, max-age=300')

  try {
    console.log('API: Starting request processing')
    console.log('GitHub Token present:', !!process.env.GITHUB_TOKEN)

    let data = await getTopThreeUsersFromDb()
    console.log('DB Data found:', !!data)

    if (!data) {
      console.log('Fetching from GitHub...')
      data = await fetchTopThreeUsersByPullRequests('fork-commit-merge/fork-commit-merge')
      console.log('GitHub data fetched:', !!data)

      if (data && data.length > 0) {
        await storeTopThreeUsersInDb(data)
        console.log('Data stored in DB')
      }
    }

    if (!data || data.length === 0) {
      console.log('No data available')
      return res.status(404).json({ error: 'No data available' })
    }

    console.log('Returning data:', data.length, 'items')
    return res.status(200).json(data)
  } catch (error) {
    console.error('API route error:', error)
    console.error('Stack trace:', error.stack)
    return res.status(500).json({
      error: 'Internal Server Error',
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    })
  }
}
