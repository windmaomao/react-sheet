import styles from './PageSheet.module.css'
import {useState} from 'react'
import PageCard, {CardProps} from 'components/PageCard'

type PageSheetProps = {
  count: number,
  level: string,
  Question: Function
}

export type QuestionProps = {
  id: string,
  level: string,
} & CardProps

const PageSheet = ({ 
  count, level, Question 
}: PageSheetProps) => {
  const [items] = useState(new Array(count).fill(0))

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {items.map((_, i) => (
          <PageCard key={`word-${i}`}>
            <Question id={i}
                      level={level}
            />
          </PageCard>
        ))}
      </main>
    </div>
  )
}

export default PageSheet