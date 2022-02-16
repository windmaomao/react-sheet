import nsWordGen, {NsWord} from 'services/nsWordGen'
import {useState, useEffect} from 'react'
import styles from 'components/NsWord.module.css'
import {CardProps} from 'components/PageCard'

const gen = nsWordGen()

const NsWord = ({ id, touch }: CardProps) => {
  const [w, setW] = useState<NsWord>()
  useEffect(() => { setW(gen()) }, [])

  if (!w) return null

  return (
    <div>
      <div className={styles.index}>{id+1}</div>
      <div className={styles.word} onClick={touch} >
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