/* eslint-disable import/no-anonymous-default-export */
import { connectToDB } from "../../utils/db";
import { getSession } from "next-auth/react"

export default async (req, res) => {
    if (req.method !== "POST") {
        res.status(400).send("Invalid method.");
        return;
    }

    if (req.headers['content-type'].includes('application/json')) {
        try {
            const projectData = req.body;
            projectData.imageUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${projectData.imageUrl}`;

            const session = await getSession({ req });
            console.log("session: ", session);


            if (session) {
                projectData.userId = session.user.id;
            } else {
                res.status(401).json({
                    error: true,
                    Message: "Not signed in. You need to be signed in to add a project.",
                });
                return;
            }

            const { db } = await connectToDB();
            let result = await db.collection("projects").insertOne(projectData);

            if (result.insertedId) {
                res.status(200).json({
                    error: false,
                    Message: "Project data successfully added.",
                });
            } else {
                res.status(500).json({
                    error: true,
                    Message: "Failed to add project data.",
                });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: "An error occurred while processing your request.",
            });
        }
    } else {
        res.status(400).json({
            error: "Expected content type application/json",
        });
    }
};
