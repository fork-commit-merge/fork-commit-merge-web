import { Contributor } from '../types/contributor'

const GITHUB_API_URL =
  'https://api.github.com/repos/fork-commit-merge/fork-commit-merge/contributors'

const BOT_ACCOUNTS = [
  'nikohoffren',
  'dependabot',
  'dependabot[bot]',
  'snyk-bot',
  'actions-user',
]

export async function getTopContributors(): Promise<Contributor[]> {
  try {
    const response = await fetch(GITHUB_API_URL)
    if (!response.ok) throw new Error('Failed to fetch contributors')

    const contributors: Contributor[] = await response.json()
    return contributors
      .filter(contributor => !BOT_ACCOUNTS.includes(contributor.login))
      .slice(0, 3)
  } catch (error) {
    console.error('Error fetching top contributors:', error)
    return []
  }
}

export async function getOtherContributors(): Promise<Contributor[]> {
  try {
    const response = await fetch(GITHUB_API_URL + '?per_page=50')
    if (!response.ok) throw new Error('Failed to fetch contributors')

    const contributors: Contributor[] = await response.json()
    console.log('Total contributors before filtering:', contributors.length)

    const filteredContributors = contributors
      .filter(contributor => !BOT_ACCOUNTS.includes(contributor.login))
    console.log('Contributors after bot filtering:', filteredContributors.length)

    //* Get exactly 24 contributors after the top 3
    const result = filteredContributors.slice(3, 27)
    console.log('Final contributors after slice:', result.length)

    return result
  } catch (error) {
    console.error('Error fetching other contributors:', error)
    return []
  }
}
