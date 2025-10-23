import React from 'react'
import styles from '../styles/index.module.scss'

export interface RightButtonProps {
  children?: React.ReactNode
  onClick?: () => void
}

export const RightButton: React.FC<RightButtonProps> = ({
  children = 'О нас',
  onClick,
}) => {
  return (
    <button className={styles.right__button} onClick={onClick}>
      {children}
    </button>
  )
}
