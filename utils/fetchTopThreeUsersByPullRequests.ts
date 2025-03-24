import axios, { AxiosError } from 'axios'

export async function fetchTopThreeUsersByPullRequests(repoPath: string) {
  try {
    console.log('Starting fetchTopThreeUsersByPullRequests...')
    // Only add authorization if GitHub token exists
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github.v3+json'
    }

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `token ${process.env.GITHUB_TOKEN}`
      console.log('Using GitHub token for authentication')
    } else {
      console.log(
        'No GitHub token found, proceeding with unauthenticated request'
      )
    }

    let url = `https://api.github.com/repos/fork-commit-merge/fork-commit-merge/pulls?state=closed&per_page=100`
    const userContributions = new Map()
    let requestCount = 0
    const MAX_REQUESTS = 10

    while (url && requestCount < MAX_REQUESTS) {
      try {
        const response = await axios.get(url, {
          headers,
          timeout: 15000 // Increased timeout to 15 seconds
        })
        requestCount++
        console.log(
          `Fetched ${response.data.length} pull requests (Request ${requestCount}/${MAX_REQUESTS})`
        )

        const pullRequests = response.data
        pullRequests.forEach((pr: any) => {
          const username = pr.user.login
          if (
            username === 'dependabot' ||
            username === 'dependabot[bot]' ||
            username === 'nikohoffren'
          ) {
            return
          }

          if (pr.merged_at) {
            userContributions.set(
              username,
              (userContributions.get(username) || 0) + 1
            )
          }
        })

        const linkHeader = response.headers.link
        const nextLink = linkHeader
          ? linkHeader.split(',').find((s: string) => s.includes('rel="next"'))
          : null
        url = nextLink ? nextLink.match(/<(.*)>/)?.[1] : null

        // Add delay to avoid rate limiting
        if (url) {
          await new Promise(resolve => setTimeout(resolve, 1000))
        }
      } catch (error) {
        // If we hit a rate limit, pause and retry
        if (error instanceof AxiosError && error.response?.status === 403) {
          console.log('Rate limit hit, pausing for 10 seconds before retry')
          await new Promise(resolve => setTimeout(resolve, 10000))
          // Don't increment request count, retry the same URL
        } else {
          console.error('Error fetching pull requests:', error)
          break // Break the loop on other errors
        }
      }
    }

    const sortedUsers = Array.from(userContributions.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([username, count]) => ({
        username,
        contributions: count,
        avatarUrl: `https://github.com/${username}.png`
      }))

    console.log('Final sorted users:', sortedUsers)
    return sortedUsers
  } catch (error) {
    console.error('API Error in fetchTopThreeUsersByPullRequests:', error)
    if (error instanceof AxiosError) {
      console.error('Error details:', error.response?.data || error.message)
    } else {
      console.error('Error details:', error)
    }
    return []
  }
}
