'use client'
import React, { memo, useMemo } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SlideImage from './SlideImage'
import { useAutoEmblaCarousel } from '@ui/hooks'
import { SLIDER_IMAGES } from '@shared/consts'
import styles from './styles/index.module.scss'

export const Slider = () => {
  const { emblaRef, scrollPrev, scrollNext } = useAutoEmblaCarousel()

  const slides = useMemo(
    () =>
      SLIDER_IMAGES.map((src, i) => (
        <SlideImage key={i} src={src} index={i} priority={i === 0} />
      )),
    []
  )

  return (
    <div className={styles.slider}>
      <div className={styles.sliderViewport} ref={emblaRef}>
        <div className={styles.sliderContainer}>{slides}</div>
      </div>

      <div className={styles.sliderNavigation}>
        <button
          onClick={scrollPrev}
          className={`${styles.sliderNavButton} ${styles.sliderNavButtonPrev}`}
          aria-label="Previous slide"
          type="button"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={scrollNext}
          className={`${styles.sliderNavButton} ${styles.sliderNavButtonNext}`}
          aria-label="Next slide"
          type="button"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}

export default memo(Slider)
