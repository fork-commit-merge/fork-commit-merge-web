/* eslint-disable import/no-anonymous-default-export */
import {
  getTopThreeUsersFromDb,
  storeTopThreeUsersInDb,
} from "../../utils/fetchTopUsersFromDb";
import { fetchTopThreeUsersByPullRequests } from "../../utils/fetchTopThreeUsersByPullRequests";

export default async (req, res) => {
  try {
    console.log('API: Checking DB for cached top three users...');
    let data = await getTopThreeUsersFromDb();

    if (!data || data.length === 0) {
      console.log('API: No cached data found, fetching from GitHub...');
      data = await fetchTopThreeUsersByPullRequests("fork-commit-merge/fork-commit-merge");

      if (data && data.length > 0) {
        console.log('API: Storing new data in DB...');
        await storeTopThreeUsersInDb(data);
      }
    } else {
      console.log('API: Using cached data from DB');
    }

    if (!data || data.length === 0) {
      console.log('API: No data available');
      return res.status(404).json({ error: 'No data available' });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('API route error:', error);
    console.error('Error details:', error.response?.data || error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



