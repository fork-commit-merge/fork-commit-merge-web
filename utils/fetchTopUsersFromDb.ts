import { connectToDB } from "./db";
import mongoose from "mongoose";
import { UserStat } from "../types";

let UserStatModel;
if (mongoose.models.UserStat) {
    UserStatModel = mongoose.model("UserStat");
} else {
    const userStatSchema = new mongoose.Schema({
        username: String,
        prCount: Number,
        avatarUrl: String,
    });
    UserStatModel = mongoose.model("UserStat", userStatSchema);
}

export { UserStatModel };

export async function storeTopUsersInDb(users: UserStat[]) {
    const { db } = await connectToDB();
    await db.collection("topUsers").deleteMany({});
    await db.collection("topUsers").insertMany(users);
}

export async function getTopUsersFromDb(): Promise<UserStat[]> {
    const { db } = await connectToDB();
    return await db.collection("topUsers").find().toArray();
}
