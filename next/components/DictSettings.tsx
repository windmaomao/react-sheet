import {motion} from 'framer-motion'
import Modal from 'components/Modal'
import {useState} from 'react'
import styles from './DictSettings.module.css'
import {useSelector, useDispatch} from 'states/useStore'
import {changeDay} from 'states/dict'

const DictSettings = ({}) => {
  const [on, setOn] = useState(false)
  const onModal = () => { setOn(!on) }
  
  const day = useSelector(s => s.dict.day)
  const onDay = (d: string) => () => {
    dispatch(changeDay(d))
  }

  const dayStyles = (d: string) => day === d 
    ? styles.dayActive
    : styles.day

  const days = useSelector(s => s.dict.days)
  const dispatch = useDispatch()

  return (
    <div>
      <motion.button 
        className={styles.button}
        onClick={onModal}
        whileHover={{ scale: 1.4 }}
        whileTap={{ scale: 0.6 }}
      />
      <Modal on={on} close={onModal}>
        <h1>GRE Words</h1>
        {days.map(d => (
          <motion.span key={d}
            onClick={onDay(d)}
            className={dayStyles(d)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            Day {d}
          </motion.span>
        ))}
      </Modal>
    </div>
  )
}

export default DictSettings