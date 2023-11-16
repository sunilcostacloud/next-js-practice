import Link from 'next/link'
import styles from './page.module.css'
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '100',
  subsets: ['latin'],
  display: 'swap'
})

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={roboto.className} >Home page</h1>
      <br />
      <Link href="/productlist">Go to Product List</Link>
      <br />
      <Link href="/server-data-fetch">Server Data Fetch</Link>
      <br />
      <Link href="/imagehandling">Image handling</Link>
      <br />
      <Link href="/dynamic-meta-data">Dynamic Meta Data</Link>
      <br />
      <Link href="/load-external-scripts">Load External Scripts</Link>
      <br />
      <Link href="/loader-with-api">Loader with api</Link>
      <br />
      <Link href="/static-side-generation">Static Side Generation</Link>
      <br />
      <Link href="/redirect-to-home">Redirect to home</Link>
      <br />
      <Link href="/redirect-using-next-config">redirect using next-config</Link>
      <br />
      <Link href="/environment-variables">environment-variables</Link>
    </main>
  )
}
