import React from 'react'
import { MainLeftButton } from './index'
import { MainRightButton } from './index'
import styles from './styles/index.module.scss'

const MainButtonsContent = (
  <div className={styles.main__buttons}>
    <MainLeftButton />
    <MainRightButton />
  </div>
)

export const MainButtons: React.FC = () => {
  return <>{MainButtonsContent}</>
}

export default MainButtons
