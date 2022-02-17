import styles from './ThemeToggle.module.css'

const ThemeToggle = () => {
  const onToggle = () => {
    const el = document.firstElementChild
    if (!el) return

    const theme = el.getAttribute('data-theme')
    const next = theme == 'dark' ? 'light' : 'dark' 
    el.setAttribute('data-theme', next)
  }
  return (
    <button className={styles.button}
            onClick={onToggle}
    >
      <svg className="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
        <g className="sun-beams" stroke="gray">
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>
      </svg>
    </button>
  )
}

export default ThemeToggle