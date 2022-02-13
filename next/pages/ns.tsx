import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../components/NsSheet.module.css'
import nsWordGen from '../services/nsWordGen'
import { useState, useEffect } from 'react'

const gen = nsWordGen()

const NsWord = ({ id }) => {
  const [w, setW] = useState()
  useEffect(() => { setW(gen()) }, [])

  const [active, setActive] = useState(false)
  const [touched, setTouched] = useState(false)
  useEffect(() => { 
    if (!touched && active) setTouched(true)
  }, [active])
  const onClick = () => { setTouched(true) }
  const onBlur = () => { setActive(false) }
  const onFocus = () => { setActive(true) }

  if (!w) return null

  const wrapperStyle = active ? styles.articleActive
    : (
      touched ? styles.articleTouched
        : styles.articleNormal
    )

  return (
    <div className={wrapperStyle}
         tabIndex="0"
         onBlur={onBlur}
         onFocus={onFocus}
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

function focusNext() {
  var query = '[tabindex]';
  if (document.activeElement) {
    var elements = [...document.querySelectorAll(query)]
    var index = elements.indexOf(document.activeElement);
    index++
    if (index == elements.length) index = 0
    elements[index].focus()
  }
}

const NsWordSheet = () => {
  const items = new Array(50).fill(0)
  useEffect(() => {
    window.addEventListener('keypress', e => {
      if (e.charCode == 13) { focusNext() }
    })
  }, [])

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Nonsense Words</h1>
      <main className={styles.main}>
        {items.map((_, i) => (
          <NsWord key={`word-${i}`} id={i} />
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
