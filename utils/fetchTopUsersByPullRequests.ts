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
  const MAX_CONCURRENT_REQUESTS = 3;
  const PER_PAGE = 100;

  try {
    // First, get the total PR count
    const initialResponse = await axios.get(`https://api.github.com/repos/${repo}/pulls`, {
      params: {
        state: 'closed',
        per_page: 1
      },
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      }
    });

    const linkHeader = initialResponse.headers.link;
    const lastPageMatch = linkHeader?.match(/page=(\d+)>; rel="last"/);
    const totalPages = lastPageMatch ? parseInt(lastPageMatch[1]) : 1;

    // Fetch PRs in batches
    for (let i = 0; i < totalPages; i += MAX_CONCURRENT_REQUESTS) {
      const requests = [];

      // Create batch of concurrent requests
      for (let j = 0; j < MAX_CONCURRENT_REQUESTS && (i + j) < totalPages; j++) {
        const pageNum = i + j + 1;
        requests.push(
          axios.get(`https://api.github.com/repos/${repo}/pulls`, {
            params: {
              state: 'closed',
              per_page: PER_PAGE,
              page: pageNum
            },
            headers: {
              Authorization: `token ${process.env.GITHUB_TOKEN}`,
            },
            timeout: 8000
          }).catch(error => {
            console.error(`Failed to fetch page ${pageNum}:`, error);
            return { data: [] };
          })
        );
      }

      // Wait for batch to complete
      const responses = await Promise.all(requests);

      // Process the responses
      responses.forEach(response => {
        if (response.data) {
          response.data.forEach((pr: any) => {
            if (pr.merged_at) {
              const username = pr.user.login;

              // Ignore specific users
              if (
                username === "dependabot" ||
                username === "dependabot[bot]" ||
                username === "nikohoffren"
              ) {
                return;
              }

              const avatarUrl = pr.user.avatar_url;
              userStats[username] = {
                prCount: (userStats[username]?.prCount || 0) + 1,
                avatarUrl,
              };
            }
          });
        }
      });

      // Add a small delay between batches to avoid rate limiting
      if (i + MAX_CONCURRENT_REQUESTS < totalPages) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    const sortedUsers: UserStat[] = Object.entries(userStats)
      .sort(([, a], [, b]) => b.prCount - a.prCount)
      .slice(0, 20)
      .map(([username, { prCount, avatarUrl }]) => ({
        username,
        prCount,
        avatarUrl,
      }));

    return sortedUsers;
  } catch (error) {
    console.error('Error fetching PRs:', error);
    throw error;
  }
};
