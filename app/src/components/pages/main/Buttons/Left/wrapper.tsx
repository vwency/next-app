import React from 'react'
import '@/styles/Header/menu/index.scss'
import LeftButtonMain from './Button'

const LeftButtonContent = (
  <div className="no-select ">
    <LeftButtonMain />
  </div>
)

const MainLeftButton = () => {
  return <>{LeftButtonContent}</>
}

export default MainLeftButton
