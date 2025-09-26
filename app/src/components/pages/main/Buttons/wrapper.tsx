import React from 'react'
import { MainLeftButton } from '@ui/buttons'
import { MainRightButton } from '@ui/buttons'
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
