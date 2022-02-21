import {Dict} from 'services/dictGen'
import {useState, useEffect} from 'react'
import styles from './DictWord.module.css'
import {QuestionProps} from 'components/PageSheet'
import {useDictSettings} from 'components/useDictSettings'

const DictWord = ({ active, touch }: QuestionProps) => {
  const settings = useDictSettings()
  const [w, setW] = useState<Dict>()
  const gen = settings.gen.get()
  useEffect(() => { 
    const g = settings.gen.get()
    setW(gen()) }, [gen])

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
