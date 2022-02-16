import dictGen, {Dict} from 'services/dictGen'
import {useState, useEffect} from 'react'
import styles from './DictWord.module.css'
import {CardProps} from 'components/PageCard'

const gen = dictGen()

const DictWord = ({ active, touch }: CardProps) => {
  const [w, setW] = useState<Dict>()
  useEffect(() => { setW(gen()) }, [])

  if (!w) return null

  return (
    <div className={styles.word}
         onClick={touch}
    >
      <div>{w.word}</div>
      {active && (
        <span className={styles.meaning}>
          {w.meaning || ''}
        </span>
      )}
    </div> 
  )
}

export default DictWord
