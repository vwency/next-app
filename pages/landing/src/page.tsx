import React, { useMemo } from 'react'
import { MainTextHead } from '@ui/text-header'
import { MainText } from '@ui/text-main'
import { MainSlider } from '@ui/slider'
import { MainFooterText } from '@ui/text-footer'
import { MainButtons } from '@ui/buttons'
import { Footer } from '@ui/footer'

export const LandingPage = () => {
  const content = useMemo(
    () => (
      <>
        <MainTextHead />
        <MainText />
        <MainFooterText />
        <MainSlider />
        <MainButtons />
        <Footer />
      </>
    ),
    []
  )

  return <div className="main__layout no-select">{content}</div>
}
