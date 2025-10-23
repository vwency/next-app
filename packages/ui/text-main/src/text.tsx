import React from 'react'
import styles from './styles/index.module.scss'

const MainTextContent = (
  <div className={`${styles['no-select']} ${styles.main_text}`}>
    Бронирование билетов
  </div>
)

export const TextMain = () => {
  return <>{MainTextContent}</>
}

export default TextMain
