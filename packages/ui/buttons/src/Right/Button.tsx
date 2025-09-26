import React from 'react'
import '../styles/RightButton.scss'

export interface RightButtonProps {
  children?: React.ReactNode
  onClick?: () => void
}

export const RightButton: React.FC<RightButtonProps> = ({
  children = 'О нас',
  onClick,
}) => {
  return (
    <button className="right-button" onClick={onClick}>
      {children}
    </button>
  )
}
