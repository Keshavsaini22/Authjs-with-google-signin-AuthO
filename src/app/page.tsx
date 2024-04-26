'use client'

import { Button, Stack } from "@mui/material";
import { loginUser } from "@/actions";

export default function Home() {
  return (
    <Stack height={'100vh'} justifyContent={'center'} alignItems={'center'}>
      <Button variant='contained' onClick={() => {
        loginUser()
      }}>Login with google</Button>
    </Stack>
  );
}
