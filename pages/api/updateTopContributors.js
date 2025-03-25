import { fetchTopThreeUsersByPullRequests } from '../../utils/fetchTopThreeUsersByPullRequests';
import { storeTopThreeUsersInDb } from '../../utils/fetchTopUsersFromDb';

export default async function handler(req, res) {
  console.log('Update contributors API called');
  console.log('Auth header present:', !!req.headers.authorization);
  console.log('Expected token:', process.env.FCM_GITHUB_TOKEN?.substring(0, 5) + '...');

  const authHeader = req.headers.authorization;
  if (!authHeader) {
    console.error('No authorization header provided');
    return res.status(401).json({ error: 'No authorization header' });
  }

  const token = authHeader.split(' ')[1];
  console.log('Received token:', token?.substring(0, 5) + '...');

  if (!token || token !== process.env.FCM_GITHUB_TOKEN) {
    console.error('Invalid authorization token');
    console.log('Token match:', token === process.env.FCM_GITHUB_TOKEN);
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    console.log('Fetching top three users...');
    const data = await fetchTopThreeUsersByPullRequests('fork-commit-merge/fork-commit-merge');
    console.log('Fetched data:', data);

    if (data && data.length > 0) {
      console.log('Storing data in DB...');
      await storeTopThreeUsersInDb(data);
      console.log('Data stored successfully');
      return res.status(200).json({ success: true, message: 'Contributors updated successfully' });
    }

    console.error('No data retrieved from GitHub');
    return res.status(400).json({ error: 'No data retrieved' });
  } catch (error) {
    console.error('Update contributors error:', error);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}
