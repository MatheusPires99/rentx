import { NextApiHandler } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { prisma } from "@/lib/prisma";

const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async redirect({ baseUrl }) {
      return Promise.resolve(`${baseUrl}/cars`);
    },
    session({ session, user }) {
      return {
        ...session,
        user: {
          // @ts-ignore
          id: user.id,
          ...session.user,
        },
      };
    },
  },
  pages: {
    signIn: "/",
  },
};

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;
