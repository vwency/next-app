import React, { FC } from 'react'
import styles from '../styles/index.module.scss'

export const LeftButtonMain: FC = () => {
  return (
    <button className={styles.main__button__left} type="button">
      Смотреть
    </button>
  )
}
