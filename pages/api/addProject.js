/* eslint-disable import/no-anonymous-default-export */
import { connectToDB } from "../../utils/db";

export default async (req, res) => {
    if (req.method === "POST") {
        const { db } = await connectToDB();
        let result = await db.collection("projects").insertOne(req.body);

        res.json(result);
    } else {
        res.status(400).send("Invalid method.");
    }
};
