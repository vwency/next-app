import React, { FC } from 'react'
import { MainLeftButton } from './index'
import { MainRightButton } from './index'
import styles from './styles/index.module.scss'

interface MainButtonsProps {
  onClickLeft?: () => void
  onClickRight?: () => void
}

export const MainButtons: FC<MainButtonsProps> = ({
  onClickLeft,
  onClickRight,
}) => {
  return (
    <div className={styles.main__buttons}>
      <MainLeftButton onClick={onClickLeft} />
      <MainRightButton />
    </div>
  )
}

export default MainButtons
