'use client'

import { Button, Stack } from "@mui/material";
import { loginUser } from "@/actions";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/config/firebase";

export default function Home() {
  return (
    <Stack height={'100vh'} justifyContent={'center'} alignItems={'center'}>
      <Button variant='contained' onClick={async () => {
        try {
          const res: any = await signInWithPopup(auth, provider)
          const data = res?._tokenResponse
          const user = {
              name: data?.fullName,
              email: data?.email,
              image: data?.photoUrl
          }
          console.log('user: ', user);
          const form = new FormData();
          form.append('email', user.email as string)
          loginUser(form)
          // formAction(form);
      }
      catch (e) {
          console.log('e: ', e);
      }
        // loginUser()
      }}>Login with google</Button>
    </Stack>
  );
}
