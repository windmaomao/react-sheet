import React, { useState, useEffect } from 'react'
import styles from './PageCard.module.css'

type PageCardProps = { 
  id: number,
  children: JSX.Element
}

export type CardProps = {
  id: number,
  active: boolean,
  touched: boolean,
  touch: () => void,
}

const PageCard = ({ id, children }: PageCardProps) => {
  const [active, setActive] = useState(false)
  const [touched, setTouched] = useState(false)
  useEffect(() => { 
    if (!touched && active) setTouched(true)
  }, [active, touched])
  const touch = () => { setTouched(true) }

  const onBlur = (e: React.FocusEvent) => { 
    if (document.activeElement === e.target) return
    setActive(false)
  }
  const onFocus = () => { setActive(true) }
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight'  || e.key === 'Enter') {
      const el = e.currentTarget.nextElementSibling
      if (el) (el as HTMLElement)?.focus()
    }
    if (e.key === 'ArrowLeft') {
      const el = e.currentTarget.previousElementSibling
      if (el) (el as HTMLElement)?.focus()
    }
  }

  const wrapperStyle = active ? styles.articleActive
    : (
      touched ? styles.articleTouched
        : styles.articleNormal
    )

  const childrenProps: CardProps = {
    id, active, touched, touch
  }

  return (
    <div className={wrapperStyle}
         tabIndex={0}
         onBlur={onBlur}
         onFocus={onFocus}
         onKeyDown={onKeyDown}
    >
      {React.cloneElement(children, childrenProps)}
    </div>
  )
}

export default PageCard
