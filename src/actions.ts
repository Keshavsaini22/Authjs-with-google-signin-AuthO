'use server'

import { signIn, signOut } from "./auth"

export async function loginUser() {
    await signIn("google")
}

export async function signoutUser() {
    await signOut()
}