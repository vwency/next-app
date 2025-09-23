'use client'

import React, { useRef } from 'react'
import MainLayout from '@/components/pages/main'
import '@/styles/Global/index.scss'
import HeaderLayout from '@/components/global/header/index'
import Stars from '@/components/global/stars'

export default function Home() {
  const mainContentRef = useRef<HTMLDivElement>(null)

  return (
    <div style={{ height: '3000px' }}>
      <Stars />
      <HeaderLayout contentRef={mainContentRef} />
      <div ref={mainContentRef}>
        <MainLayout />
      </div>
    </div>
  )
}
