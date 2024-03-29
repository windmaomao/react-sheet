import styles from './PageNavs.module.css'
import ThemeToggle from 'components/ThemeToggle'
import {motion} from 'framer-motion'

type PageNavsProps = {
  title: string,
  items?: string[],
  visit?: (item: string) => void
}

const PageNavs = ({ title, items, visit }: PageNavsProps) => {
  const onClick = (item: string) => () => { 
    visit && visit(item)
  }
  return (
    <div className={styles.container}>
      <ThemeToggle />
      <h1 className={styles.h1}>{title}</h1>
      <div className={styles.navs}>
        {items?.map(item => (
          <motion.button key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={styles.nav}
                onClick={onClick(item)}
          >
            {item}
          </motion.button>
        ))}
      </div>
    </div>
  )
}

export default PageNavs