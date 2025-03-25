import {
  getTopThreeUsersFromDb,
  storeTopThreeUsersInDb
} from '../../utils/fetchTopUsersFromDb'
import { fetchTopThreeUsersByPullRequests } from '../../utils/fetchTopThreeUsersByPullRequests'

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Cache-Control', 'public, max-age=300')

  try {
    const message = 'API: Checking DB for cached top three users...'
    console.log(message)
    res.setHeader('X-Debug-Message', message)

    let data = await getTopThreeUsersFromDb()

    if (!data) {
      console.log('No cached data found, fetching from GitHub...')
      data = await fetchTopThreeUsersByPullRequests('fork-commit-merge/fork-commit-merge')

      if (data && data.length > 0) {
        await storeTopThreeUsersInDb(data)
      }
    }

    if (!data || data.length === 0) {
      return res.status(404).json({ error: 'No data available' })
    }

    return res.status(200).json(data)
  } catch (error) {
    console.error('API route error:', error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}

