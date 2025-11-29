'use client'

import React, { useRef, useMemo, useCallback, useState, useEffect } from 'react'
import styles from './styles/card/index.module.scss'
import { useCardItemHover } from '@ui/hooks'
import { CardItemProps } from '@shared/interfaces'

export const CardItem: React.FC<CardItemProps> = React.memo(
  ({ image, alt = '', description, detailedDescription = '' }) => {
    const descriptionRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)
    const detailedRef = useRef<HTMLDivElement>(null)

    const [isHovered, setIsHovered] = useState(false)
    const [supportsHover, setSupportsHover] = useState(false)

    useEffect(() => {
      if (typeof window !== 'undefined' && window.matchMedia) {
        setSupportsHover(window.matchMedia('(hover: hover)').matches)
      }
    }, [])

    const handleMouseEnter = useCallback(() => {
      if (detailedDescription && supportsHover) setIsHovered(true)
    }, [detailedDescription, supportsHover])

    const handleMouseLeave = useCallback(() => {
      if (supportsHover) setIsHovered(false)
    }, [supportsHover])

    const detailedStyles = useMemo(
      () => ({
        opacity: isHovered ? 1 : 0,
        transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
        transition: supportsHover
          ? 'opacity 0.3s ease, transform 0.3s ease'
          : 'none',
      }),
      [isHovered, supportsHover]
    )

    return (
      <div
        className={styles.cardItem}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.cardItemImage} ref={imageRef}>
          <img src={image} alt={alt} loading="lazy" decoding="async" />
          <div ref={descriptionRef} className={styles.cardItemDescription}>
            {description}
          </div>
          {detailedDescription && (
            <div
              ref={detailedRef}
              className={styles.cardItemDetailed}
              style={detailedStyles}
            >
              {detailedDescription}
            </div>
          )}
        </div>
      </div>
    )
  },
  (prev, next) =>
    prev.image === next.image &&
    prev.alt === next.alt &&
    prev.description === next.description &&
    prev.detailedDescription === next.detailedDescription
)

export default CardItem
