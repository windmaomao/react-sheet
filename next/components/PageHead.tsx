import styles from './PageHead.module.css'
import ThemeToggle from 'components/ThemeToggle'

type PageHeadProps = {
  title: string
}

const PageHead = ({title}: PageHeadProps) => {
  return (
    <div className={styles.container}>
      <ThemeToggle />
      <h1 className={styles.h1}>{title}</h1>
    </div>
  )
}

export default PageHead