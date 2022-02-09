import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const NonSensePage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Non-sense</title>
        <meta name="description" content="non sense spelling" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Nonsense page!</a>
        </h1>
      </main>
    </div>
  )
}

export default NonSensePage
