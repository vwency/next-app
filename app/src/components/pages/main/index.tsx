import React from 'react'
import '@/styles/MainLayout/index.scss'
import MainTextHead from './Texts/TextHead/wrapper'
import MainText from './Texts/TextMain/wrapper'
import { MainButtons } from './Buttons'
import MainSlider from './Slider/wrapper'
import MainFooterText from './Texts/TextFooter/wrapper'

const MainLayout = () => {
  return (
    <div className="main__layout no-select">
      <MainTextHead />
      <MainText />
      <MainFooterText />
      <MainSlider />
      <MainButtons />
    </div>
  )
}

export default React.memo(MainLayout)
