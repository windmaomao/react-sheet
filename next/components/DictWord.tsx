import styles from './DictWord.module.css'
import {QuestionProps} from 'components/PageSheet'
import {useSelector} from 'states/useStore'
import {useEffect} from 'react'
import {speak} from 'services/speech'

const DictWord = ({ id, touch, active }: QuestionProps) => {
  const w = useSelector(s => s.dict.words[id as number])
  useEffect(() => { 
    if (active && w) { w.word && speak(w.word) }
  }, [active, w])

  if (!w) return null

  return (
    <div className={styles.word}
         onClick={touch}
    >
      <div>{w.word}</div>
    </div> 
  )
}

export default DictWord
