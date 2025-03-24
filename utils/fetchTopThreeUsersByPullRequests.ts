export async function fetchTopThreeUsersByPullRequests(repoPath: string) {
  try {
    console.log('Starting fetchTopThreeUsersByPullRequests...')
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github.v3+json'
    }

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `token ${process.env.GITHUB_TOKEN}`
      console.log('Using GitHub token for authentication')
    }

    let url = `https://api.github.com/repos/fork-commit-merge/fork-commit-merge/pulls?state=closed&per_page=100`
    const userContributions = new Map()
    let requestCount = 0
    const MAX_REQUESTS = 10

    while (url && requestCount < MAX_REQUESTS) {
      try {
        const controller = new AbortController()
        const timeout = setTimeout(() => controller.abort(), 15000)

        const response = await fetch(url, {
          headers,
          signal: controller.signal
        })
        clearTimeout(timeout)

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        requestCount++
        console.log(`Fetched ${data.length} pull requests (Request ${requestCount}/${MAX_REQUESTS})`)

        data.forEach((pr: any) => {
          const username = pr.user.login
          if (username === 'dependabot' ||
              username === 'dependabot[bot]' ||
              username === 'nikohoffren') {
            return
          }

          if (pr.merged_at) {
            userContributions.set(
              username,
              (userContributions.get(username) || 0) + 1
            )
          }
        })

        const linkHeader = response.headers.get('link')
        const nextLink = linkHeader
          ? linkHeader.split(',').find((s: string) => s.includes('rel="next"'))
          : null
        url = nextLink ? nextLink.match(/<(.*)>/)?.[1] : null

        if (url) {
          await new Promise(resolve => setTimeout(resolve, 1000))
        }
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('Request timed out')
        } else if (error instanceof Response && error.status === 403) {
          console.log('Rate limit hit, pausing for 10 seconds before retry')
          await new Promise(resolve => setTimeout(resolve, 10000))
        } else {
          console.error('Error fetching pull requests:', error)
          break
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
    return []
  }
}

