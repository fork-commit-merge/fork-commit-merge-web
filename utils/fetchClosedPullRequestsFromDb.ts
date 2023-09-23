import mongoose from "mongoose";
import { connectToDB } from "./db";
import { ClosedPullRequest } from "../types";

let ClosedPullRequestModel;

if (mongoose.models.ClosedPullRequest) {
    ClosedPullRequestModel = mongoose.model("ClosedPullRequest");
} else {
    const closedPullRequestSchema = new mongoose.Schema({
        username: String,
        title: String,
        issue: String,
        repository: String,
    });
    ClosedPullRequestModel = mongoose.model(
        "ClosedPullRequest",
        closedPullRequestSchema
    );
}

export async function storeClosedPullRequestsInDb(
    username: string,
    prs: ClosedPullRequest[]
) {
    const { db } = await connectToDB();
    const prsWithUsername = prs.map((pr) => ({ ...pr, username }));
    await db.collection("closedPullRequests").deleteMany({ username });
    console.log("Deleted old closed pull requests");
    await db.collection("closedPullRequests").insertMany(prsWithUsername);
    console.log("Inserted new closed pull requests");
}

export async function getClosedPullRequestsFromDb(
    username: string
): Promise<ClosedPullRequest[]> {
    const { db } = await connectToDB();
    const result = await db
        .collection("closedPullRequests")
        .find({ username })
        .toArray();
    return result;
}

export { ClosedPullRequestModel };
