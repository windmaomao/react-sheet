import { useState, useEffect } from 'react'

const useTimer = () => {
  const [seconds, setSeconds] = useState(0)
  
  useEffect(() => {
    setInterval(() => {
      setSeconds(seconds => seconds + 1)
    }, 1000)
  }, [])

  return seconds
}

export default useTimer
