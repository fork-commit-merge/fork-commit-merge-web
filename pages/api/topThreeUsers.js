/* eslint-disable import/no-anonymous-default-export */
import {
  getTopThreeUsersFromDb,
  storeTopThreeUsersInDb,
} from "../../utils/fetchTopUsersFromDb";
import { fetchTopThreeUsersByPullRequests } from "../../utils/fetchTopThreeUsersByPullRequests";

export default async (req, res) => {
  try {
    const data = await fetchTopThreeUsersByPullRequests("fork-commit-merge/fork-commit-merge");

    if (data && data.length > 0) {
      await storeTopThreeUsersInDb(data).catch(error => {
        console.error('DB storage error:', error);
      });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Error details:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};




