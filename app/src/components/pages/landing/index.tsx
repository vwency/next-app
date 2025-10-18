import React from 'react'
import '@/styles/MainLayout/index.scss'
import { MainTextHead } from '@ui/text-header'
import { MainText } from '@ui/text-main'
import { MainSlider } from '@ui/slider'
import { MainFooterText } from '@ui/text-footer'
import { MainButtons } from '@ui/buttons'
import { Footer } from '@ui/footer'

const MainLayout = () => {
  return (
    <div className="main__layout no-select">
      <MainTextHead />
      <MainText />
      <MainFooterText />
      <MainSlider />
      <MainButtons />
      <Footer />
    </div>
  )
}

export default React.memo(MainLayout)
