'use client'

import React, { useRef } from 'react'
import '@/styles/Global/index.scss'
import HeaderLayout from '@/components/global/header/index'
import Stars from '@/components/global/stars'
import GalleryNoModal from '@/components/pages/afisha/Content/NonModal'
import RightButtonAfisha from '@/components/pages/afisha/Buttons/index'

export default function Home() {
  const mainContentRef = useRef<HTMLDivElement>(null)

  return (
    <div style={{ height: '3000px' }}>
      <Stars />
      <HeaderLayout contentRef={mainContentRef} />
      <div ref={mainContentRef}>
        <GalleryNoModal />
        <RightButtonAfisha />
      </div>
    </div>
  )
}
