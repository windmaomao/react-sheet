import {Dict} from 'services/dictGen'
import {useState, useEffect} from 'react'
import styles from './DictWord.module.css'
import {QuestionProps} from 'components/PageSheet'
import {useSelector} from 'states/useStore'

const DictWord = ({ active, touch }: QuestionProps) => {
  const [w, setW] = useState<Dict>()
  const gen = useSelector(s => s.dict.gen)
  useEffect(() => { setW(gen()) }, [gen])

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
