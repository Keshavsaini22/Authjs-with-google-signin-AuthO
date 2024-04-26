'use server'

import { signIn, signOut } from "./auth"
import { AuthError } from 'next-auth';

export async function loginUser(formData: FormData) {
    // await signIn("google")
    try {
        await signIn("credentials", formData)
    } catch (error:any) {
        console.log('error: ', error?.message);

        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}

export async function signoutUser() {
    try {
        await signOut();
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}