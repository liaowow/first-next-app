import NextAuth, { CallbacksOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  callbacks: {
    async signIn({ profile }: { profile: { login: string }}) {
      return profile.login === 'liaowow';
    },
  } as unknown as CallbacksOptions,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };