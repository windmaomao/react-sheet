import type { NextPage } from 'next'
import Head from 'next/head'
import NsSheet from '../components/NsSheet'
import styles from '../components/NsSheet.module.css'
import gen from '../services/nsGen'
import { useState } from 'react'

const NsQuestion = () => {
  const [q] = useState(gen())
  const charStyle = (q, i) => 
    q.highlights.indexOf(i) >= 0 ? styles.charHighlight : ''

  return (
    <div className={styles.question}>
      {q.word.split('').map((c, i) => (
        <span 
          key={`${i}`}
          className={charStyle(q, i)}
        >
          {c}
        </span>
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
            <NsQuestion />
          </article>
        ))}
      </main>
    </div>
  )
}

export default NonSensePage
