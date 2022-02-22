import styles from './DictWord.module.css'
import {QuestionProps} from 'components/PageSheet'
import {useSelector} from 'states/useStore'

const DictWord = ({ id, touch }: QuestionProps) => {
  const w = useSelector(s => s.dict.words[id as number])
  if (!w) return null

  return (
    <div className={styles.word}
         onClick={touch}
    >
      <div title={w.meaning}>{w.word}</div>
    </div> 
  )
}

export default DictWord
