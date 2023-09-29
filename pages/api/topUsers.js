/* eslint-disable import/no-anonymous-default-export */
import {
  getTopUsersFromDb,
  storeTopUsersInDb,
} from "../../utils/fetchTopUsersFromDb";
import { fetchTopUsersByPullRequests } from "../../utils/fetchTopUsersByPullRequests";

export default async (req, res) => {
  try {
    let data = await getTopUsersFromDb();

    if (!data || data.length === 0) {
      data = await fetchTopUsersByPullRequests("nikohoffren/fork-commit-merge");
      await storeTopUsersInDb(data);
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
