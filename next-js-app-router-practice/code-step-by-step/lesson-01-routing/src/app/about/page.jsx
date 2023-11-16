"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link';

const About = () => {
    const router = useRouter();
    return (
        <div>
            <h1 className='heading'>About</h1>
            <button onClick={() => router.push("/")} >Go to Home</button>
            <Link href="/about/aboutstudent">Go to About Student</Link>
            <button onClick={() => router.push("/about/aboutcollege")} >Go to About College</button>
        </div>
    )
}

export default About