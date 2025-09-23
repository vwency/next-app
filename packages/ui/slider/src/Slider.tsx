'use client'
import React, { memo, useMemo } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SlideImage from './SlideImage'
import { useAutoEmblaCarousel } from '@ui/hooks'
import { SLIDER_IMAGES } from '@shared/consts'

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
    <div className="slider">
      <div className="slider__viewport" ref={emblaRef}>
        <div className="slider__container">{slides}</div>
      </div>

      <div className="slider__navigation">
        <button
          onClick={scrollPrev}
          className="slider__nav-button slider__nav-button--prev"
          aria-label="Previous slide"
          type="button"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={scrollNext}
          className="slider__nav-button slider__nav-button--next"
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
