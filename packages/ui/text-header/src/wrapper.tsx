import React from 'react'
import styles from './styles/index.module.scss'
import FastText from './text'

export const MainTextHead = () => {
  return (
    <div className={`${styles.noSelect} ${styles.mainFastTextWrapper}`}>
      <FastText />
    </div>
  )
}

export default MainTextHead
