import {motion} from 'framer-motion'
import Backdrop from 'components/Backdrop'
import styles from './Modal.module.css'

const dropIn = {
  hidden:  {
    y: "-100vh",
    opacity: 0
  },
  visible: {
    y: "0",
    opacity: 1
  },
  exit: {
    y: '100vh',
    opacity: 0
  }
}

type ModalProps = {
  children?: React.ReactNode,
  on: boolean,
  close: Function
}

const Modal = ({ children, on, close }: ModalProps) => {
  if (!on) return null

  return (
    <Backdrop close={close}>
      <motion.button
        className={styles.close}     
        onClick={e => close()}
        whileHover={{ scale: 1.4 }}
        whileTap={{ scale: 0.6 }}
      >
        x
      </motion.button>
      <motion.div
         className={styles.modal}
         onClick={e => e.stopPropagation()}
         variants={dropIn}
         initial="hidden"
         animate="visible"
         exit="exit"
      >
        {children}
      </motion.div>
    </Backdrop>
  )
}

export default Modal