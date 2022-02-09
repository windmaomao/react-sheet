import type { NextPage } from 'next'
import Head from 'next/head'
import NsSheet from '../components/NsSheet'
import styles from '../components/NsSheet.module.css'

const NsQuestion = ({ chars }) => {
  return (
    <div className={styles.cell}>
      {chars.map(c => (
        <span>{c}</span>
      ))}
    </div> 
  )
}

const NonSensePage: NextPage = () => {
  const items = new Array(100).fill(0).map((_,i) => i)

  return (
    <div className={styles.container}>
      <Head>
        <title>Non-sense</title>
        <meta name="description" content="non sense spelling" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {items.map(c => (
          <article 
            className={styles.article}
            key={`${c}`}
          >
            <NsQuestion chars={['c','i','v']} />
          </article>
        ))}
      </main>
    </div>
  )
}

export default NonSensePage
