import React from 'react'
import MainLeftButton from './Left/wrapper'
import MainRightButton from './Right/wrapper'
import '@/styles/MainLayout/Buttons/index.scss'

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
