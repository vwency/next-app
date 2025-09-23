import React from 'react'
import '@/styles/Header/menu/index.scss'
import { RightButton } from '@ui/buttons'

const RightButtonContent = (
  <div className="no-select main__button__right">
    <RightButton />
  </div>
)

const MainRightButton = () => {
  return <>{RightButtonContent}</>
}

export default MainRightButton
