import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { connectToDB } from "../../../utils/db";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  events: {
    signIn: async (message) => {
      const { db } = await connectToDB();
      const user = message.user;

      const existingUser = await db
        .collection("users")
        .findOne({ id: user.id });

      if (!existingUser) {
        await db.collection("users").insertOne(user);
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
