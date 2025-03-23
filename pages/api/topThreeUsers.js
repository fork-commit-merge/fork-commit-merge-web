import {
  getTopThreeUsersFromDb,
  storeTopThreeUsersInDb,
} from "../../utils/fetchTopUsersFromDb";
import { fetchTopThreeUsersByPullRequests } from "../../utils/fetchTopThreeUsersByPullRequests";

export default async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  try {
    const message = 'API: Checking DB for cached top three users...';
    console.log(message);
    res.setHeader('X-Debug-Message', message);

    let data = await getTopThreeUsersFromDb();

    if (!data || data.length === 0) {
      const message2 = 'API: No cached data found, fetching from GitHub...';
      console.log(message2);
      res.setHeader('X-Debug-Message-2', message2);

      data = await fetchTopThreeUsersByPullRequests("fork-commit-merge/fork-commit-merge");

      if (data && data.length > 0) {
        const message3 = 'API: Storing new data in DB...';
        console.log(message3);
        res.setHeader('X-Debug-Message-3', message3);

        await storeTopThreeUsersInDb(data);
      }
    } else {
      const message4 = 'API: Using cached data from DB';
      console.log(message4);
      res.setHeader('X-Debug-Message-4', message4);
    }

    if (!data || data.length === 0) {
      const message5 = 'API: No data available';
      console.log(message5);
      res.setHeader('X-Debug-Message-5', message5);
      return res.status(404).json({ error: 'No data available' });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('API route error:', error);
    console.error('Error details:', error.response?.data || error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


