'use client'

import { useRef } from 'react'
import { DesktopMenuLayout } from '@ui/menu'
import { StarsBackground } from '@ui/stars-background'
import { EventBoardPage } from './page'
import styles from './styles/index.module.scss'

export const AfishaPageWrapper = () => {
  const mainContentRef = useRef<HTMLDivElement>(null)

  return (
    <div className={styles.container}>
      <StarsBackground />
      <DesktopMenuLayout contentRef={mainContentRef} />
      <div ref={mainContentRef}>
        <EventBoardPage />
      </div>
    </div>
  )
}
