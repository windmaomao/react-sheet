import styles from './DictWord.module.css'
import {QuestionProps} from 'components/PageSheet'
import {useSelector} from 'states/useStore'
import {useEffect} from 'react'

const DictWord = ({ id, touch, active }: QuestionProps) => {
  const w = useSelector(s => s.dict.words[id as number])
  if (!w) return null

  const onClick = () => {
    const u = new SpeechSynthesisUtterance()
    u.lang = 'en'
    u.pitch = 1.0
    u.rate = 0.75
    u.text = w ? w.word : 'Hello' 
    window.speechSynthesis.speak(u)
  }

  useEffect(() => {
    if (active) { onClick() } 
  }, [active])

  return (
    <div className={styles.word}
         onClick={touch}
    >
      <div title={w.meaning} onClick={onClick}>{w.word}</div>
    </div> 
  )
}

export default DictWord
