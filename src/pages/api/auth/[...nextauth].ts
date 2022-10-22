import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Seu email:', type: 'email', placeholder: '' },
        // password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials): Promise<any> {
        const res = await fetch(
          `http://localhost:3000/api/aluno/${credentials?.email}`
        )
        const { data } = await res.json()

        if (res.ok && !data?.blocked) {
          return data
        } else {
          return null
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
    error: '/auth/sem-acesso',
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session, user, token }) {
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token
    },
  },
}
export default NextAuth(authOptions)
