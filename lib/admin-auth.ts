import type { NextAuthOptions, Session } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

const clientId = process.env.GITHUB_ID;
const clientSecret = process.env.GITHUB_SECRET;
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
    async signIn({ account }) {
      return Boolean(adminConfigured && account?.provider === 'github' && account.providerAccountId === allowedId);
    },
    async jwt({ token, account }) {
      if (adminConfigured && account?.provider === 'github' && account.providerAccountId === allowedId) {
        token.adminId = account.providerAccountId;
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

export function isAuthorizedAdmin(session: Session | null): boolean {
  const adminUser = session?.user as (Session['user'] & { adminId?: string }) | undefined;
  return Boolean(adminConfigured && allowedId && adminUser?.adminId === allowedId);
}
