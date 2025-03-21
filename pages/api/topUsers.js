import { fetchTopUsersByPullRequests } from "../../utils/fetchTopUsersByPullRequests";
import { getTopUsersFromDb, storeTopUsersInDb } from "../../utils/fetchTopUsersFromDb";

export default async function handler(req, res) {
  // Add CORS headers
  res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=599');

  try {
    console.log('API: Checking DB for cached top users...');
    let data = await getTopUsersFromDb();

    // If we have cached data, return it immediately
    if (data && data.length > 0) {
      console.log('API: Using cached data from DB');
      res.status(200).json(data);

      // Optionally refresh cache in background if data is old
      const cacheAge = Date.now() - new Date(data[0].timestamp).getTime();
      if (cacheAge > 3600000) { // 1 hour
        refreshCache().catch(console.error);
      }
      return;
    }

    // If no cached data, fetch new data with timeout
    console.log('API: No cached data found, fetching from GitHub...');
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 50000); // 50 second timeout

    try {
      data = await fetchTopUsersByPullRequests("fork-commit-merge/fork-commit-merge");
      clearTimeout(timeout);

      if (data && data.length > 0) {
        console.log('API: Storing new data in DB...');
        await storeTopUsersInDb(data);
        res.status(200).json(data);
      } else {
        res.status(404).json({ error: 'No data available' });
      }
    } catch (error) {
      clearTimeout(timeout);
      throw error;
    }
  } catch (error) {
    console.error('API route error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Background cache refresh
async function refreshCache() {
  try {
    const data = await fetchTopUsersByPullRequests("fork-commit-merge/fork-commit-merge");
    if (data && data.length > 0) {
      await storeTopUsersInDb(data);
    }
  } catch (error) {
    console.error('Failed to refresh cache:', error);
  }
}



