'use client'

import { useRef } from 'react'
import { HeaderLayout } from '@ui/menu'
import { StarsBackground } from '@ui/stars-background'
import { EventBoardPage } from './page'

export const AfishaPageWrapper = () => {
  const mainContentRef = useRef<HTMLDivElement>(null)

  return (
    <div style={{ height: '3000px' }}>
      <StarsBackground />
      <HeaderLayout contentRef={mainContentRef} />
      <div ref={mainContentRef}>
        <EventBoardPage />
      </div>
    </div>
  )
}
