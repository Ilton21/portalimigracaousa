import type { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET;
const allowedId = process.env.GITHUB_ADMIN_ID;
const secret = process.env.NEXTAUTH_SECRET;

/** Fail closed until all configuration is provided server-side. */
export const adminConfigured = Boolean(clientId && clientSecret && allowedId && secret);

export const authOptions: NextAuthOptions = {
  secret,
  providers: adminConfigured ? [
    GitHubProvider({ clientId: clientId!, clientSecret: clientSecret! })
  ] : [],
  session: { strategy: 'jwt', maxAge: 60 * 60 * 8 },
  pages: { signIn: '/admin/login', error: '/admin/login' },
  callbacks: {
    async signIn({ account, profile }) {
      return Boolean(adminConfigured && account?.provider === 'github' && profile && String(profile.id) === allowedId);
    },
    async jwt({ token, account, profile }) {
      if (account?.provider === 'github' && profile) {
        token.adminId = String(profile.id);
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && typeof token.adminId === 'string') {
        (session.user as typeof session.user & { adminId?: string }).adminId = token.adminId;
      }
      return session;
    }
  }
};

export function isAuthorizedAdmin(session: { user?: { adminId?: string } } | null): boolean {
  return Boolean(adminConfigured && allowedId && session?.user?.adminId === allowedId);
}
