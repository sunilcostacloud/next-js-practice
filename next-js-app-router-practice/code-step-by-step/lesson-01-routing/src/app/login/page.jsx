"use client"
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'

const Login = () => {
    const router = useRouter();
    return (
        <div>
            <h1 className='heading'>Login</h1>
            <Link href="/">Go to Home</Link>
            <br />
            <br />
            <button onClick={() => router.push("/login/loginstudent")} >Go to student login page</button>
            <button onClick={() => router.push("/login/loginteacher")} >Go to teacher login page</button>
        </div>
    )
}

export default Login