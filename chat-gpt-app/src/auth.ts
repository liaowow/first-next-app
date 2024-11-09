import NextAuth, { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const authOptions: AuthOptions = {
  callbacks: {
    async signIn({ profile }) {
      return (profile as { login?: string })?.login === "liaowow";
    },
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const nextAuthConfig = {
  ...authOptions,
  basePath: "/api/auth",
} as const;

export const { handlers, auth, signIn, signOut } = NextAuth(nextAuthConfig as AuthOptions);