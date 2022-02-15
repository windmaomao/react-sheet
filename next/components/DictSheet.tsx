import styles from 'components/DictSheet.module.css'
import dictGen, { Dict } from 'services/dictGen'
import React, { useState, useEffect } from 'react'

const gen = dictGen()

type DictWordProps = {
  id: number,
}
const DictWord = ({ id }: DictWordProps) => {
  const [w, setW] = useState<Dict>()
  useEffect(() => { setW(gen()) }, [])

  const [active, setActive] = useState(false)
  const [touched, setTouched] = useState(false)
  useEffect(() => { 
    if (!touched && active) setTouched(true)
  }, [active, touched])
  const onClick = () => { setTouched(true) }
  const onBlur = (e: React.FocusEvent) => { 
    if (document.activeElement === e.target) return
    setActive(false)
  }
  const onFocus = () => { setActive(true) }
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      const el = e.currentTarget.nextElementSibling
      if (el) (el as HTMLElement)?.focus()
    }
    if (e.key === 'ArrowLeft') {
      const el = e.currentTarget.previousElementSibling
      if (el) (el as HTMLElement)?.focus()
    }
  }

  if (!w) return null

  const wrapperStyle = active 
    ? styles.articleActive
    : (
      touched 
        ? styles.articleTouched
        : styles.articleNormal
    )

  return (
    <div className={wrapperStyle}
         tabIndex={0}
         onBlur={onBlur}
         onFocus={onFocus}
         onKeyDown={onKeyDown}
    >
      <div className={styles.word} onClick={onClick}>
        <div>{w.word}</div>
        {active && (
          <span className={styles.meaning}>
            {w.meaning || ''}
          </span>
        )}
      </div> 
    </div>
  )
}

const items = new Array(100).fill(0).map((_,i) => i)
const DictSheet = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.h1}>Dict GRE</h1>
        {items.map((_, i) => (
          <DictWord key={`dict-${i}`} id={i} />
        ))}
      </main>
    </div>
  )
}

export default DictSheet
