'use client'

import React, { useState, useEffect, useRef } from 'react'
import MainMenu from '../menu/desktop'
import MobileMenu from '../menu/mobile'
import styles from '../styles/desktop/index.module.scss'
import { HeaderLayoutProps } from '@shared/interfaces'
import { MAX_SCROLL_HIDE, SCROLL_SHOW_THRESHOLD } from '@shared/consts'
import { useMainMenu } from '@ui/hooks'

const DesktopMenuLayout: React.FC<HeaderLayoutProps> = ({ contentRef }) => {
  const [translateY, setTranslateY] = useState(0)
  const lastScrollY = useRef(0)
  const accumulatedUpScroll = useRef(0)

  const { isOpen, toggleMenu, menuRef } = useMainMenu(contentRef)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const diff = currentScrollY - lastScrollY.current

      if (diff > 0 && isOpen) {
        toggleMenu()
      }

      let newTranslateY = translateY

      if (diff > 0) {
        accumulatedUpScroll.current = 0
        newTranslateY = Math.min(newTranslateY + diff, MAX_SCROLL_HIDE)
      } else {
        accumulatedUpScroll.current -= diff

        if (accumulatedUpScroll.current >= SCROLL_SHOW_THRESHOLD) {
          newTranslateY = 0
        }
      }

      setTranslateY(newTranslateY)
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [translateY, isOpen, toggleMenu])

  const translatePercent = (translateY / MAX_SCROLL_HIDE) * 100

  return (
    <>
      <div
        className={`${styles.DesktopMenuWrapper}`}
        style={{
          transform: `translateY(-${translatePercent}%)`,
          transition: 'transform 0.1s linear',
        }}
      >
        <MainMenu
          ref={menuRef}
          contentRef={contentRef}
          isOpen={isOpen}
          toggleMenu={toggleMenu}
        />
      </div>
      <MobileMenu isOpen={isOpen} />
    </>
  )
}

export default React.memo(DesktopMenuLayout)
