import React from 'react'
import styles from './styles/index.module.scss'
import TextMain from './text'

const wrapper = (
  <div className={`${styles['no-select']} ${styles.main__text__main__wrapper}`}>
    <TextMain />
  </div>
)

export const MainText = () => {
  return <>{wrapper}</>
}

export default MainText
