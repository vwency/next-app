'use client'

import { useRef } from 'react'
import { LandingPage } from './page'
import { DesktopMenuLayout } from '@ui/menu'
import { StarsBackground } from '@ui/stars-background'
import styles from './styles/index.module.scss'

export const LandingPageWrapper = () => {
  const mainContentRef = useRef<HTMLDivElement>(null)

  return (
    <div className={styles.container}>
      <StarsBackground />
      <DesktopMenuLayout contentRef={mainContentRef} />
      <div ref={mainContentRef}>
        <LandingPage />
      </div>
    </div>
  )
}
