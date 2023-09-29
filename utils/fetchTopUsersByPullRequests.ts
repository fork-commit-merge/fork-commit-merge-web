import axios from "axios";

type UserStat = {
  username: string;
  prCount: number;
  avatarUrl: string;
};

export const fetchTopUsersByPullRequests = async (
  repo: string
): Promise<UserStat[]> => {
  let url = `https://api.github.com/repos/${repo}/pulls?state=closed&per_page=100`;
  const userStats: { [key: string]: { prCount: number; avatarUrl: string } } =
    {};

  while (url) {
    const response = await axios.get(url);
    const prData = response.data;
    prData.forEach((pr: any) => {
      if (pr.merged_at) {
        const username = pr.user.login;

        //* Ignore dependabot and nikohoffren PRs
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

    const linkHeader = response.headers.link;
    const nextLink = linkHeader
      ? linkHeader.split(",").find((s: string) => s.includes('rel="next"'))
      : null;
    url = nextLink ? nextLink.match(/<(.*)>/)?.[1] : null;
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
};
