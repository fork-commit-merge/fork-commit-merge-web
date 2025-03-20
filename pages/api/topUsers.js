/* eslint-disable import/no-anonymous-default-export */
import {
  getTopUsersFromDb,
  storeTopUsersInDb,
} from "../../utils/fetchTopUsersFromDb";
import { fetchTopUsersByPullRequests } from "../../utils/fetchTopUsersByPullRequests";

export default async (req, res) => {
  try {
    console.log('API: Checking DB for cached top users...');
    let data = await getTopUsersFromDb();

    if (!data) {
      console.log('API: No cached data found, fetching from GitHub...');
      data = await fetchTopUsersByPullRequests("fork-commit-merge/fork-commit-merge");

      if (data && data.length > 0) {
        console.log('API: Storing new data in DB...');
        await storeTopUsersInDb(data);
      }
    } else {
      console.log('API: Using cached data from DB');
    }

    if (!data || data.length === 0) {
      console.log('API: No data available');
      return res.status(404).json({ error: 'No data available' });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error('API route error:', error);
    console.error('Error details:', error.response?.data || error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};


