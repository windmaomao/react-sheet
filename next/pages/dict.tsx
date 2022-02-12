import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../components/DictSheet.module.css'
import dictGen from '../services/dictGen'
import { useState, useEffect } from 'react'

const gen = dictGen()

const DictWord = ({ active, onActive }) => {
  const [w, setW] = useState()
  useEffect(() => { setW(gen()) }, [])
  const [touched, setTouched] = useState(false)
  useEffect(() => { 
    if (!touched && active) setTouched(true)
  }, [active])
  const onClick = () => {
    setTouched(true)
    onActive()
  }

  if (!w) return null

  const wrapperStyle = active ? styles.articleActive
    : (
      touched ? styles.articleTouched
        : styles.articleNormal
    )

  return (
    <div className={wrapperStyle}>
      <div className={styles.word}
           onClick={onClick}
      >
        {w.word}
      </div> 
    </div>
  )
}

const DictSheet = () => {
  const items = new Array(10).fill(0).map((_,i) => i)
  const [current, setCurrent] = useState(0)
  const isActive = i => i === current
  const onActive = i => () => { setCurrent(i) }
  useEffect(() => {
    window.addEventListener('keypress', e => {
      if (e.charCode == 13) {
        setCurrent(i => {
          let c = i + 1
          if (c == items.length) c = 0
          return c 
        })
     }
    })
  }, [])

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {items.map((_, i) => (
          <DictWord key={`dict-${i}`} 
                    active={isActive(i)}
                    onActive={onActive(i)}
          />
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
