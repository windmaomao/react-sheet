import styles from './PageSheet.module.css'
import {useState} from 'react'
import PageCard from 'components/PageCard'

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
          <PageCard key={`word-${i}`} id={i}>
            <Question />
          </PageCard>
        ))}
      </main>
    </div>
  )
}

export default PageSheet