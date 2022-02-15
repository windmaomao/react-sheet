import styles from './PageSheet.module.css'
import {useState} from 'react'

type PageSheetProps = {
  count: number,
  Question: Function
}

const PageSheet = ({ count, Question }: PageSheetProps) => {
  const [items] = useState(new Array(count).fill(0))

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {items.map((_, i) => (
          <Question key={`word-${i}`} id={i} />
        ))}
      </main>
    </div>
  )
}

export default PageSheet