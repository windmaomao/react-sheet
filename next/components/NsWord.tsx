import nsWordGen, {NsWord} from 'services/nsWordGen'
import {useState, useEffect} from 'react'
import styles from 'components/NsWord.module.css'
import {QuestionProps} from 'components/PageSheet'

const gen = nsWordGen()

const NsWord = ({ id, level, touch }: QuestionProps) => {
  const [w, setW] = useState<NsWord>()
  useEffect(() => { setW(gen(level)) }, [level])

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