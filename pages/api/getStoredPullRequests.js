/* eslint-disable import/no-anonymous-default-export */
import { connectToDB } from "../../utils/db";

export default async (req, res) => {
  const { username } = req.query;
  const { db } = await connectToDB();
  const cursor = db.collection("closedPullRequests").find({ username });
  const data = await cursor.toArray();

  res.json({ pullRequests: data });
};
