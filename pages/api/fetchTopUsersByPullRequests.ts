import axios from 'axios';

interface UserStat {
  username: string;
  prCount: number;
  avatarUrl: string;
}

export const fetchTopUsersByPullRequests = async (repo: string): Promise<UserStat[]> => {
  const url = `https://api.github.com/repos/${repo}/pulls?state=closed&per_page=100`;

  const response = await axios.get(url);
  const prData = response.data;

  const userStats: { [key: string]: { prCount: number, avatarUrl: string } } = {};

  prData.forEach((pr: any) => {
    if (pr.merged_at) {
      const username = pr.user.login;
      const avatarUrl = pr.user.avatar_url;
      userStats[username] = {
        prCount: (userStats[username]?.prCount || 0) + 1,
        avatarUrl
      };
    }
  });

  const sortedUsers: UserStat[] = Object.entries(userStats)
    .sort(([, a], [, b]) => b.prCount - a.prCount)
    .slice(0, 20)
    .map(([username, { prCount, avatarUrl }]) => ({ username, prCount, avatarUrl }));

  return sortedUsers;
};
