'use client'

import React, { useRef } from 'react'
import MainLayout from '@/components/pages/landing'
import '@/styles/Global/index.scss'
import { HeaderLayout } from '@ui/menu'
import { StarsBackground } from '@ui/stars-background'

export default function Home() {
  const mainContentRef = useRef<HTMLDivElement>(null)

  return (
    <div style={{ height: '3000px' }}>
      <StarsBackground />
      <HeaderLayout contentRef={mainContentRef} />
      <div ref={mainContentRef}>
        <MainLayout />
      </div>
    </div>
  )
}
