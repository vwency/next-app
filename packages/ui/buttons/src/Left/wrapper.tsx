import React, { FC } from 'react'
import { LeftButtonMain } from './Button'

interface MainLeftButtonProps {
  onClick?: () => void
}

export const MainLeftButton: FC<MainLeftButtonProps> = ({ onClick }) => (
  <div>
    <LeftButtonMain onClick={onClick} />
  </div>
)

export default MainLeftButton
