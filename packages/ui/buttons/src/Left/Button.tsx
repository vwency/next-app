import React, { FC } from 'react'
import styles from '../styles/index.module.scss'

interface LeftButtonMainProps {
  onClick?: () => void
}

export const LeftButtonMain: FC<LeftButtonMainProps> = ({ onClick }) => {
  return (
    <button
      className={styles.main__button__left}
      type="button"
      onClick={onClick}
    >
      Смотреть
    </button>
  )
}
