/* eslint-disable import/no-anonymous-default-export */
import {
  getTopThreeUsersFromDb,
  storeTopThreeUsersInDb,
} from "../../utils/fetchTopUsersFromDb";
import { fetchTopThreeUsersByPullRequests } from "../../utils/fetchTopThreeUsersByPullRequests";

export default async (req, res) => {
  try {
    let data = await getTopThreeUsersFromDb();

    if (!data || data.length === 0) {
      // Set a timeout for the GitHub API request
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Timeout')), 8000)
      );

      const fetchDataPromise = fetchTopThreeUsersByPullRequests(
        "nikohoffren/fork-commit-merge"
      );

      data = await Promise.race([timeoutPromise, fetchDataPromise]);

      if (data) {
        // Store in background
        storeTopThreeUsersInDb(data).catch(console.error);
      }
    }

    const topThreeData = data?.slice(0, 3) || [];
    return res.status(200).json(topThreeData);
  } catch (error) {
    console.error("API Error:", error);
    // Return cached data if available, even if expired
    const cachedData = await getTopThreeUsersFromDb(true);
    if (cachedData?.length > 0) {
      return res.status(200).json(cachedData.slice(0, 3));
    }
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
