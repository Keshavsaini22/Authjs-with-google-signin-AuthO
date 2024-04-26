import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Google from "next-auth/providers/google"
import Credentials from 'next-auth/providers/credentials';

export const { auth, signIn, handlers, signOut } = NextAuth({
    ...authConfig,
    // providers: [Google],
    providers: [
        Credentials({
            async authorize(credentials) {
                return Promise.resolve(credentials)
            },
        })
    ],
});