import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { connectToDB } from "../../../utils/db";

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            scope: "read:user user:email",
            async authorize(credentials, req) {
                console.log(
                    "Authorize function called with credentials:",
                    credentials
                );

                try {
                    const res = await fetch("https://api.github.com/user", {
                        headers: {
                            Authorization: `token ${credentials.access_token}`,
                        },
                    });
                    const profile = await res.json();

                    console.log("GitHub profile:", profile);
                    console.log("GitHub API response status:", res.status);

                    if (res.ok) {
                        // Connect to DB
                        const { db } = await connectToDB();
                        let user = await db
                            .collection("users")
                            .findOne({ id: profile.id });

                        if (!user) {
                            user = {
                                id: profile.id,
                                name: profile.name,
                                email: profile.email,
                            };

                            await db.collection("users").insertOne(user);
                        }

                        console.log("Authorize return:", user);
                        return user;
                    } else {
                        console.error(
                            "Response from GitHub was not ok",
                            profile
                        );
                    }
                } catch (err) {
                    console.error(
                        "An error occurred during authorization:",
                        err
                    );
                }

                console.error("Authorize function didn't complete correctly");
                return null;
            },
        }),
    ],

    database: process.env.MONGODB_URI,

    callbacks: {
        async session(session, userOrToken) {
            console.log("session object before:", session);
            console.log("userOrToken object:", userOrToken);
            if (userOrToken) {
                session.user = { ...session.user, id: userOrToken.id };
            }
            console.log("session object after:", session);
            return session;
        },
        async jwt(token, user) {
            console.log("jwt token before:", token);
            console.log("jwt user object:", user);
            if (user) {
                token = { ...token, id: user.id };
            }
            console.log("jwt token after:", token);
            return token;
        },
    },

    secret: process.env.NEXTAUTH_SECRET,
});
