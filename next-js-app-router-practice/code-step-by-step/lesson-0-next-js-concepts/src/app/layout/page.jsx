"use client"
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'

const Layout = () => {
    const router = useRouter();
    return (
        <div>
            <h1 className='heading'>Layout</h1>
            <Link href="/">Go to Home</Link>
            <br />
            <br />
            <button onClick={() => router.push("/layout/loginstudent")} >Go to student login page</button>
            <button onClick={() => router.push("/layout/loginteacher")} >Go to teacher login page</button>
        </div>
    )
}

export default Layout