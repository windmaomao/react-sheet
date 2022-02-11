import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../components/DictSheet.module.css'
import dictGen from '../services/dictGen'
import { useState, useEffect } from 'react'

const gen = dictGen()
const DictWord = () => {
  const [w, setW] = useState()
  useEffect(() => { setW(gen()) }, [])
  
  const [touched, setTouched] = useState(false)

  if (!w) return null

  return (
    <div className={styles.word}>
      {w.word}
    </div> 
  )
}

const DictSheet = () => {
  const items = new Array(10).fill(0).map((_,i) => i)

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {items.map((_, i) => (
          <article 
            className={styles.article}
            key={`dict-${i}`}
          >
           <DictWord />
          </article>
        ))}
      </main>
    </div>
  )
}

const DictPage: NextPage = () => {
  return (
    <div>
      <Head> <title>Learn A Word</title> </Head>
      <DictSheet />
    </div>
  )
}

export default DictPage
