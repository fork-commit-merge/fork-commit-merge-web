export async function fetchCommitCount(): Promise<number> {
  try {
    let url: string | null =
      'https://api.github.com/repos/fork-commit-merge/fork-commit-merge/commits?per_page=100'

    const headers = {
      Authorization: `token ${process.env.GITHUB_TOKEN}`
    }

    let commitCount = 0

    while (url) {
      const response: Response = await fetch(url, { headers })
      const linkHeader: string | null = response.headers.get('Link')
      const data: any[] = await response.json()
      commitCount += data.length

      const match: RegExpMatchArray | null =
        linkHeader?.match(/<([^>]+)>;\s*rel="next"/) ?? null

      url = match ? match[1] : null
    }

    return commitCount
  } catch (error) {
    console.error('Failed to fetch commits:', error)
    return 0
  }
}
