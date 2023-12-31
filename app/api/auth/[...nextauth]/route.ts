import bcrypt from 'bcrypt'
import NextAuth from 'next-auth/next'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import CredentialsProvider from 'next-auth/providers/credentials'

import prisma from "@/libs/prismadb"

const handler = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "soge",
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Invalid Credentials')
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })


                if (!user || !user?.hashedpassword) {
                    throw new Error("Invalid Credentials")
                }

                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    user.hashedpassword
                )

                if (!isCorrectPassword) {
                    throw new Error("Invalid Credentials")
                }

                return user
            }
        })
    ],
    debug: process.env.NODE_ENV == "development",
    session: {
        strategy: 'jwt'
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET,
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user }
        },
        async session({ session, token, user }) {
            session.user = token as any;
            return session
        }
    },
    pages: {
        signIn: '/auth/login',
    }
})

export { handler as POST, handler as GET }


