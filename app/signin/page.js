'use client'

import { signIn, useSession } from 'next-auth/react'

const signInPage=()=>{ 

    const session = useSession()

    return(
        <div>
            <button onClick={ async()=> await signIn('google', { callbackUrl:'/',redirect: true }) }> Sign In With Google </button>
        </div>
    )
}

export default signInPage