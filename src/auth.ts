import NextAuth, { type DefaultSession } from "next-auth";
import Google from "next-auth/providers/google";
import { upsertMenuUser } from "@/lib/menu-users";

declare module "next-auth" {
  interface Session {
    user: {
      googleId: string;
    } & DefaultSession["user"];
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    googleId?: string;
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  session: { strategy: "jwt" },
  // Necessário fora da Vercel (Railway, Docker etc.) para o Auth.js confiar
  // no host informado pelo proxy reverso, senão o primeiro login em produção
  // falha com UntrustedHost.
  trustHost: true,
  callbacks: {
    async jwt({ token, account, profile }) {
      // account/profile só existem na primeira chamada, logo após o login.
      // profile.sub é o id estável do Google — user.id não é confiável aqui
      // porque não usamos database adapter.
      if (account && profile?.sub) {
        token.googleId = profile.sub;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.googleId) {
        session.user.googleId = token.googleId;
      }
      return session;
    },
  },
  events: {
    async signIn({ user, profile }) {
      if (!profile?.sub || !user.email) return;

      await upsertMenuUser({
        googleId: profile.sub,
        name: user.name ?? null,
        email: user.email,
        avatarUrl: user.image ?? null,
      });
    },
  },
});
