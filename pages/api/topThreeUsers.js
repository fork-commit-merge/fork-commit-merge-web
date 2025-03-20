/* eslint-disable import/no-anonymous-default-export */
import {
  getTopThreeUsersFromDb,
  storeTopThreeUsersInDb,
} from "../../utils/fetchTopUsersFromDb";
import { fetchTopThreeUsersByPullRequests } from "../../utils/fetchTopThreeUsersByPullRequests";

export default async (req, res) => {
  try {
    console.log('Fetching top three users...');
    const data = await fetchTopThreeUsersByPullRequests("fork-commit-merge/fork-commit-merge");
    console.log('Fetched data:', data);

    if (data && data.length > 0) {
      console.log('Storing data in DB...');
      await storeTopThreeUsersInDb(data).catch(error => {
        console.error('DB storage error:', error);
      });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('API route error:', error);
    console.error('Error details:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



