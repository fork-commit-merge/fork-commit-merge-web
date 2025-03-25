import { fetchTopThreeUsersByPullRequests } from '../../utils/fetchTopThreeUsersByPullRequests';
import { storeTopThreeUsersInDb } from '../../utils/fetchTopUsersFromDb';

export default async function handler(req, res) {
  const authHeader = req.headers.authorization;
  if (authHeader !== `Bearer ${process.env.GITHUB_TOKEN}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const data = await fetchTopThreeUsersByPullRequests('fork-commit-merge/fork-commit-merge');

    if (data && data.length > 0) {
      await storeTopThreeUsersInDb(data);
      return res.status(200).json({ success: true, message: 'Contributors updated successfully' });
    }

    return res.status(400).json({ error: 'No data retrieved' });
  } catch (error) {
    console.error('Update contributors error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
