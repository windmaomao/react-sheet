import styles from 'components/DictSheet.module.css'
import dictGen, { Dict } from 'services/dictGen'
import { useState, useEffect } from 'react'

const gen = dictGen()

type DictWordProps = {
  active: boolean,
  onActive: () => void
}
const DictWord = ({ active, onActive }: DictWordProps) => {
  const [w, setW] = useState<Dict>()
  useEffect(() => { setW(gen()) }, [])
  const [touched, setTouched] = useState(false)
  useEffect(() => { 
    if (!touched && active) setTouched(true)
  }, [active, touched])
  const onClick = () => {
    setTouched(true)
    onActive()
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
    <div className={wrapperStyle}>
      <div className={styles.word}
           onClick={onClick}
      >
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
  const [current, setCurrent] = useState(0)
  const isActive = (i: number) => i === current
  const onActive = (i: number) => () => { setCurrent(i) }
  useEffect(() => {
    window.addEventListener('keypress', (e: KeyboardEvent) => {
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
        <h1 className={styles.h1}>Dict GRE</h1>
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

export default DictSheet
