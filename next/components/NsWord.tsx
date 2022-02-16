import styles from 'components/NsWord.module.css'
import nsWordGen, { NsWord } from 'services/nsWordGen'
import React, { useState, useEffect } from 'react'

const gen = nsWordGen()

type NsWordProps = { id: number }

const NsWord = ({ id }: NsWordProps) => {
  const [w, setW] = useState<NsWord>()
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
    if (e.key === 'ArrowRight' || e.key === 'Enter') {
      const el = e.currentTarget.nextElementSibling
      if (el) (el as HTMLElement)?.focus()
    }
    if (e.key === 'ArrowLeft') {
      const el = e.currentTarget.previousElementSibling
      if (el) (el as HTMLElement)?.focus()
    }
  }
  if (!w) return null

  const wrapperStyle = active ? styles.articleActive
    : (
      touched ? styles.articleTouched
        : styles.articleNormal
    )

  return (
    <div className={wrapperStyle}
         tabIndex={0}
         onBlur={onBlur}
         onFocus={onFocus}
         onKeyDown={onKeyDown}
    >
      <div className={styles.index}>{id+1}</div>
      <div className={styles.word} onClick={onClick} >
        {w.map((p, i) => (
          <span key={`${p}`}>
            {p}
          </span>
        ))}
      </div> 
    </div>
  )
}

export default NsWord