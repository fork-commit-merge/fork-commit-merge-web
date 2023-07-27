/* eslint-disable import/no-anonymous-default-export */
import AWS from "aws-sdk";

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

export default async (req, res) => {
    if (req.method === "GET") {
        const { projectName, fileType } = req.query;

        if (!projectName || !fileType) {
            return res
                .status(400)
                .json({ error: "Missing project name or file type" });
        }

        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `${projectName}-${Date.now()}`,
            Expires: 60, // this is the time in seconds till expiration
            ContentType: fileType,
        };

        try {
            const url = await s3.getSignedUrlPromise("putObject", params);
            res.status(200).json({ url, key: params.Key });
        } catch (error) {
            res.status(500).json({ error: "Error generating pre-signed URL" });
        }
    } else {
        res.status(400).send("Invalid method.");
    }
};
