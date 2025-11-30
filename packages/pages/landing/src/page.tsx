'use client'

import { useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { MainTextHead } from '@ui/text-header'
import { MainText } from '@ui/text-main'
import { MainSlider } from '@ui/slider'
import { MainFooterText } from '@ui/text-footer'
import { MainButtons } from '@ui/buttons'
import { Footer } from '@ui/footer'
import styles from './styles/index.module.scss'

export const LandingPage = () => {
  const router = useRouter()

  const content = useMemo(
    () => (
      <>
        <MainTextHead />
        <MainText />
        <MainFooterText />
        <MainSlider />
        <MainButtons onClickLeft={() => router.push('/afisha')} />
        <Footer />
      </>
    ),
    []
  )

  return (
    <div className={`${styles.container} main__layout no-select`}>
      {content}
    </div>
  )
}
