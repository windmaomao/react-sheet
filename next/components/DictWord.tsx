import dictGen, {Dict} from 'services/dictGen'
import {useState, useEffect} from 'react'
import styles from './DictWord.module.css'
import {QuestionProps} from 'components/PageSheet'
import {useDictSettings} from 'components/useDictSettings'

const DictWord = ({ active, touch }: QuestionProps) => {
  const dict = useDictSettings()
  const [w, setW] = useState<Dict>()
  useEffect(() => { 
    const day = dict.day.get()
    const gen = dictGen(day)
    setW(gen()) 
  }, [])

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
