'use client'

import React, { useRef } from 'react'
import { LandingPage } from './page'
import { HeaderLayout } from '@ui/menu'
import { StarsBackground } from '@ui/stars-background'

export const LandingPageWrapper = () => {
  const mainContentRef = useRef<HTMLDivElement>(null)

  return (
    <div style={{ height: '3000px' }}>
      <StarsBackground />
      <HeaderLayout contentRef={mainContentRef} />
      <div ref={mainContentRef}>
        <LandingPage />
      </div>
    </div>
  )
}
