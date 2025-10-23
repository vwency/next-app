import React from 'react'
import { RightButton } from './Button'
import styles from '../styles/index.module.scss'

export const MainRightButton: React.FC = () => (
  <div className={styles.main__button__right}>
    <RightButton />
  </div>
)

export default MainRightButton
