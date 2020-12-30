import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js ISR Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my demo!
        </h1>

        <div className={styles.grid}>
          <a href="/isr" className={styles.card}>
            <h3>ISR &rarr;</h3>
            <p>Fetches a random public API every revalidation period</p>
          </a>

          <a href="/ssg" className={styles.card}>
            <h3>SSG &rarr;</h3>
            <p>Fetches a random public API at build time</p>
          </a>

          <a href="/ssr" className={styles.card}>
            <h3>SSR &rarr;</h3>
            <p>Fetches a random public API on every request</p>
          </a>
        </div>
      </main>
    </div>
  )
}
