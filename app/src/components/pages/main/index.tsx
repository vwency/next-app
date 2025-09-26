import React from 'react'
import '@/styles/MainLayout/index.scss'
import { MainTextHead } from '@ui/text-header'
import { MainText } from '@ui/text-main'
import { MainButtons } from './Buttons'
import { MainSlider } from '@ui/slider'
import { MainFooterText } from '@ui/text-footer'

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
