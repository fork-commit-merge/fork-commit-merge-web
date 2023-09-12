/* eslint-disable import/no-anonymous-default-export */
import {
    getClosedPullRequestsFromDb,
    storeClosedPullRequestsInDb,
} from '../../utils/fetchClosedPullRequestsFromDb';
import { fetchClosedPullRequests } from '../../utils/fetchClosedPullRequests';
export default async (req, res) => {
    const username = req.query.username;

    try {
        let prs = await getClosedPullRequestsFromDb(username);

        if (!prs || prs.length === 0) {
            prs = await fetchClosedPullRequests(username);
            await storeClosedPullRequestsInDb(username, prs);
        }

        return res.status(200).json(prs);
    } catch (error) {
        console.error('API Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
