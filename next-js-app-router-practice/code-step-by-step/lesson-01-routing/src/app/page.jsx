"use client"
import Link from 'next/link'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div>
        <h1 className='heading'>home page</h1>
      </div>
      <Link href="/login">Go to Login page</Link>
      <br />
      <Link href="/about">Go to About page</Link>
      <br />
      <button onClick={() => router.push("/login")} >Go to login page</button>
      <button onClick={() => router.push("/about")} >Go to about page</button>
    </>
  )
}
