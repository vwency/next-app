import React from 'react'
import { MainLeftButton } from './index'
import { MainRightButton } from './index'
import './styles/index.scss'

const MainButtonsContent = (
  <div className="main__buttons">
    <MainLeftButton />
    <MainRightButton />
  </div>
)

const MainButtons = () => {
  return <>{MainButtonsContent}</>
}

export default MainButtons
