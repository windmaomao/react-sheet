import {motion} from 'framer-motion'
import React from 'react'
import styles from './Backdrop.module.css'

type BackdropProps = {
  children: React.ReactNode,
  close: Function
}

const Backdrop = ({children, close}: BackdropProps) => {
  const onClick = () => { close() }
  return (
    <motion.div 
      className={styles.backdrop}
      onClick={onClick}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      {children}
    </motion.div>
  )
}

export default Backdrop