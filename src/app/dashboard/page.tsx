'use client'
import { signoutUser } from '@/actions'
import { Button, Stack } from '@mui/material'
import React from 'react'

function Dashboard() {
    return (
        <Stack height={'100vh'} justifyContent={'center'} alignItems={'center'}>
            <Button variant='contained' onClick={() => {
                signoutUser()
            }}>Logout</Button>
        </Stack>
    )
}

export default Dashboard