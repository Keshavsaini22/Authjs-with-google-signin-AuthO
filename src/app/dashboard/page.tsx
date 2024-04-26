'use client'
import { signoutUser } from '@/actions'
import { auth } from '@/config/firebase'
import { Button, Stack } from '@mui/material'
import { signOut } from 'firebase/auth'
import React from 'react'

function Dashboard() {
    return (
        <Stack height={'100vh'} justifyContent={'center'} alignItems={'center'}>
            <Button variant='contained' onClick={async () => {
                await signOut(auth)
                signoutUser()
            }}>Logout</Button>
        </Stack>
    )
}

export default Dashboard