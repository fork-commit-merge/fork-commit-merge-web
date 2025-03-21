import axios from "axios";

type UserStat = {
  username: string;
  prCount: number;
  avatarUrl: string;
};

export const fetchTopUsersByPullRequests = async (
  repo: string
): Promise<UserStat[]> => {
  const userStats: { [key: string]: { prCount: number; avatarUrl: string } } = {};
  const PER_PAGE = 100;

  try {
    // Use cursor-based pagination instead of page numbers
    let hasNextPage = true;
    let cursor = null;

    while (hasNextPage) {
      const response: { data: any[]; headers: { link?: string } } = await axios.get(`https://api.github.com/repos/${repo}/pulls`, {
        params: {
          state: 'closed',
          per_page: PER_PAGE,
          ...(cursor ? { after: cursor } : {}),
        },
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
        },
        timeout: 30000, // 30 seconds timeout
      });

      const prs = response.data;

      // Process PRs
      prs.forEach((pr: any) => {
        if (pr.merged_at) {
          const username = pr.user.login;
          if (!shouldExcludeUser(username)) {
            userStats[username] = {
              prCount: (userStats[username]?.prCount || 0) + 1,
              avatarUrl: pr.user.avatar_url,
            };
          }
        }
      });

      // Check if there are more pages
      const linkHeader = response.headers.link;
      hasNextPage = linkHeader?.includes('rel="next"') ?? false;
      const nextLink = linkHeader?.match(/<([^>]+)>;\s*rel="next"/)?.[1];
      cursor = nextLink ? new URL(nextLink).searchParams.get('after') : null;

      // Add delay between requests to avoid rate limiting
      if (hasNextPage) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    return Object.entries(userStats)
      .sort(([, a], [, b]) => b.prCount - a.prCount)
      .slice(0, 20)
      .map(([username, { prCount, avatarUrl }]) => ({
        username,
        prCount,
        avatarUrl,
      }));

  } catch (error) {
    console.error('Error fetching PRs:', error);
    throw error;
  }
};

function shouldExcludeUser(username: string): boolean {
  const excludedUsers = ['dependabot', 'dependabot[bot]', 'nikohoffren'];
  return excludedUsers.includes(username);
}

