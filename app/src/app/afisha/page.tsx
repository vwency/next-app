'use client'

import React, { useRef } from 'react'
import '@/styles/Global/index.scss'
import { HeaderLayout } from '@ui/menu'
import { StarsBackground } from '@ui/stars-background'
import { EventBoard } from '@ui/event-board'
import RightButtonAfisha from '@/components/pages/afisha/Buttons/index'

export default function Home() {
  const mainContentRef = useRef<HTMLDivElement>(null)

  return (
    <div style={{ height: '3000px' }}>
      <StarsBackground />
      <HeaderLayout contentRef={mainContentRef} />
      <div ref={mainContentRef}>
        <EventBoard />
        <RightButtonAfisha />
      </div>
    </div>
  )
}
