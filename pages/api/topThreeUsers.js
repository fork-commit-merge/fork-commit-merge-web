import {
  getTopThreeUsersFromDb,
  storeTopThreeUsersInDb
} from '../../utils/fetchTopUsersFromDb'
import { fetchTopThreeUsersByPullRequests } from '../../utils/fetchTopThreeUsersByPullRequests'

export default async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Cache-Control', 'public, max-age=300') // Cache for 5 minutes

  try {
    const message = 'API: Checking DB for cached top three users...'
    console.log(message)
    res.setHeader('X-Debug-Message', message)

    // Start with a timeout of 15 seconds
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(
        () => reject(new Error('DB operation timed out after 15 seconds')),
        15000
      )
    })

    let data
    try {
      // Race the DB fetch with a timeout
      data = await Promise.race([getTopThreeUsersFromDb(), timeoutPromise])
    } catch (dbError) {
      console.log('DB fetch timed out or failed:', dbError.message)
      res.setHeader('X-Debug-Message-1', `DB Error: ${dbError.message}`)
      // Continue to GitHub fetch on DB error
      data = null
    }

    if (!data || data.length === 0) {
      const message2 = 'API: No cached data found, fetching from GitHub...'
      console.log(message2)
      res.setHeader('X-Debug-Message-2', message2)

      try {
        // Fetch from GitHub without a timeout - let it complete
        data = await fetchTopThreeUsersByPullRequests(
          'fork-commit-merge/fork-commit-merge'
        )

        if (data && data.length > 0) {
          const message3 = 'API: Storing new data in DB...'
          console.log(message3)
          res.setHeader('X-Debug-Message-3', message3)

          // Don't wait for DB store to complete, let it happen in background
          storeTopThreeUsersInDb(data).catch(storeError => {
            console.error('Failed to store data in DB:', storeError)
          })
        }
      } catch (githubError) {
        console.error('GitHub fetch error:', githubError.message)
        res.setHeader(
          'X-Debug-Message-5',
          `GitHub Error: ${githubError.message}`
        )
        // No fallback data, return an error
        return res
          .status(500)
          .json({ error: 'Failed to fetch contributors data' })
      }
    } else {
      const message4 = 'API: Using cached data from DB'
      console.log(message4)
      res.setHeader('X-Debug-Message-4', message4)
    }

    if (!data || data.length === 0) {
      const message5 = 'API: No data available'
      console.log(message5)
      res.setHeader('X-Debug-Message-5', message5)
      return res.status(404).json({ error: 'No data available' })
    }

    res.status(200).json(data)
  } catch (error) {
    console.error('API route error:', error)
    console.error('Error details:', error.response?.data || error.message)

    // Return a simplified error response
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message || 'Unknown error'
    })
  }
}
