'use client'
import React, { memo } from 'react'
import Image from 'next/image'
import { SlideImageProps } from '@shared/types'
import styles from './styles/index.module.scss'

export const SlideImage = memo(
  ({ src, alt, index, priority }: SlideImageProps) => (
    <div className={styles.sliderSlide}>
      <Image
        src={src}
        alt={alt || `Slide ${index + 1}`}
        fill
        className={styles.sliderImage}
        priority={priority}
        sizes="100vw"
        quality={75}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQ..."
        loading={priority ? 'eager' : 'lazy'}
      />
    </div>
  )
)

SlideImage.displayName = 'SlideImage'
export default SlideImage
