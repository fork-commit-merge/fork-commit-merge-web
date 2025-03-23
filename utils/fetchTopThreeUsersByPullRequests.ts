import axios, { AxiosError } from 'axios';

export async function fetchTopThreeUsersByPullRequests(repoPath: string) {
  try {
    console.log('Starting fetchTopThreeUsersByPullRequests...');
    const headers = {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github.v3+json',
    };

    let url = `https://api.github.com/repos/fork-commit-merge/fork-commit-merge/pulls?state=closed&per_page=100`;
    const userContributions = new Map();

    while (url) {
      const response = await axios.get(url, { headers });
      console.log(`Fetched ${response.data.length} pull requests`);

      const pullRequests = response.data;
      pullRequests.forEach((pr: any) => {
        const username = pr.user.login;
        if (username === "dependabot" || username === "dependabot[bot]" || username === "nikohoffren") {
          console.log(`Skipping contribution from ${username}`);
          return;
        }

        if (pr.merged_at) {
          userContributions.set(username, (userContributions.get(username) || 0) + 1);
        }
      });

      const linkHeader = response.headers.link;
      const nextLink = linkHeader
        ? linkHeader.split(",").find((s: string) => s.includes('rel="next"'))
        : null;
      url = nextLink ? nextLink.match(/<(.*)>/)?.[1] : null;
    }

    const sortedUsers = Array.from(userContributions.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([username, count]) => ({
        username,
        contributions: count,
        avatarUrl: `https://avatars.githubusercontent.com/${username}`,
      }));

    console.log('Final sorted users:', sortedUsers);
    return sortedUsers;
  } catch (error) {
    console.error('API Error in fetchTopThreeUsersByPullRequests:', error);
    if (error instanceof AxiosError) {
      console.error('Error details:', error.response?.data || error.message);
    } else {
      console.error('Error details:', error);
    }
    return [];
  }
}









