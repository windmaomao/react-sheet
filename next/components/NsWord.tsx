import nsWordGen, {NsWord} from 'services/nsWordGen'
import {useState, useEffect} from 'react'
import styles from 'components/NsWord.module.css'
import {QuestionProps} from 'components/PageSheet'
import {speak} from 'services/speech'

const gen = nsWordGen()

const NsWord = ({ id, level, touch }: QuestionProps) => {
  const [w, setW] = useState<NsWord>()
  useEffect(() => { setW(gen(level)) }, [level])

  if (!w) return null

  const onClick = () => { speak(w.join('')) }

  return (
    <div>
      <div className={styles.index}>{id}</div>
      <div className={styles.word} onClick={touch} >
        {w.map((p, i) => (
          <span key={`${p}`} onClick={onClick}>
            {p}
          </span>
        ))}
      </div> 
    </div>
  )
}

export default NsWord