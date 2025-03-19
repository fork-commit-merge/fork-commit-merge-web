/* eslint-disable import/no-anonymous-default-export */
import {
  getTopThreeUsersFromDb,
  storeTopThreeUsersInDb,
} from "../../utils/fetchTopUsersFromDb";
import { fetchTopThreeUsersByPullRequests } from "../../utils/fetchTopThreeUsersByPullRequests";

export default async (req, res) => {
  try {
    // Force refresh data instead of using cached data
    const data = await fetchTopThreeUsersByPullRequests("fork-commit-merge/fork-commit-merge");

    if (data && data.length > 0) {
      // Update the cache
      await storeTopThreeUsersInDb(data).catch(console.error);
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('API route error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


