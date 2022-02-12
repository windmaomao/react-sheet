import type { NextPage } from 'next'
import Head from 'next/head'
import NsSheet from '../components/NsSheet'
import styles from '../components/NsSheet.module.css'
import nsWordGen from '../services/nsWordGen'
import { useState, useEffect } from 'react'

const gen = nsWordGen()

const NsWord = ({ id, active, onActive }) => {
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
    <div className={wrapperStyle}
         key={'a'}
    >
      <div className={styles.index}>{id+1}</div>
      <div className={styles.word}
           onClick={onClick}
      >
        {w.map((p, i) => (
          <span key={`${p}`}>
            {p}
          </span>
        ))}
      </div> 
    </div>
  )
}

const NsWordSheet = () => {
  const items = new Array(50).fill(0).map((_,i) => i)
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
      <h1 className={styles.h1}>Nonsense Words</h1>
      <main className={styles.main}>
        {items.map((_, i) => (
          <NsWord key={`word-${i}`} 
                  id={i}
                  active={isActive(i)}
                  onActive={onActive(i)}
          />
        ))}
      </main>
    </div>
  )
}



const NonSensePage: NextPage = () => {
  return (
    <div>
      <Head> <title>NonSense Word</title> </Head>
      <NsWordSheet />
    </div>
  )
}


export default NonSensePage
