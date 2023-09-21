'use client'

import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'

const signInPage=()=>{ 

    const session = useSession()

    return(
        <div className='min-h-[76vh] flex justify-center items-center'>
            <span className='flex gap-1 bg-[blue] items-center justify-center p-4'>
                <Image src="/google.png" alt="" height={50} width={50} className='rounded-full'/>
            <button onClick={ async()=> await signIn('google', { callbackUrl:'/',redirect: true }) } className=' text-white p-4 h-3 flex items-center'> 
               <h1 className='text-xl'> Sign In With Google </h1> 
            </button>
            </span>
        </div>
    )
}

export default signInPage