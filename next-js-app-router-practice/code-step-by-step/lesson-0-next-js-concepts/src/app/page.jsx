"use client"
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <div>
        <div>
          <h1 className='heading'>home page</h1>
        </div>
        <Link href="/layout">Go to Layout</Link>
        <br />
        <button onClick={() => router.push("/layout")} >Go to Layout page</button>
        <button onClick={() => router.push("/dynamicroutes")} >Dynamic Routes</button>
        <button onClick={() => router.push("/catch-all-routes")} >catch all routes</button>
      </div>
    </main>
  )
}
