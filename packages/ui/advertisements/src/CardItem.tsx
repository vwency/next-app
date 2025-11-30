'use client'

import React, { useRef, useMemo, useCallback, useState, useEffect } from 'react'
import styles from './styles/card/index.module.scss'
import { CardItemProps, SessionType, SessionFormat } from '@shared/interfaces'

export const CardItem: React.FC<CardItemProps> = React.memo(
  ({
    image,
    alt = '',
    description,
    detailedDescription = '',
    sessions = [],
  }) => {
    const descriptionRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)
    const detailedRef = useRef<HTMLDivElement>(null)

    const [isHovered, setIsHovered] = useState(false)
    const [supportsHover, setSupportsHover] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
      if (typeof window !== 'undefined' && window.matchMedia) {
        setSupportsHover(window.matchMedia('(hover: hover)').matches)
        setIsMobile(
          window.matchMedia('(max-width: 768px) and (pointer: coarse)').matches
        )
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

    const formatTimestamp = (timestamp: number) => {
      const date = new Date(timestamp * 1000)
      return date.toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
      })
    }

    const formatSessionType = (type: SessionType) => {
      return type === SessionType.VIP ? 'VIP' : 'Стандарт'
    }

    if (isMobile) {
      return (
        <div className={styles.cardItem}>
          <div className={styles.cardItemImage} ref={imageRef}>
            <img src={image} alt={alt} loading="lazy" decoding="async" />
          </div>
          <div className={styles.cardItemContent}>
            <div ref={descriptionRef} className={styles.cardItemDescription}>
              {description}
            </div>
            {sessions.length > 0 && (
              <div className={styles.cardItemSessions}>
                <div className={styles.sessionsTitle}>Сеансы:</div>
                <div className={styles.sessionsList}>
                  {sessions.map((session, index) => (
                    <div key={index} className={styles.sessionItem}>
                      <span className={styles.sessionTime}>
                        {formatTimestamp(session.timestamp)}
                      </span>
                      <span className={styles.sessionType}>
                        {formatSessionType(session.type)}
                      </span>
                      {session.format && (
                        <span className={styles.sessionFormat}>
                          {session.format}
                        </span>
                      )}
                      {session.price && (
                        <span className={styles.sessionPrice}>
                          {session.price} ₽
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )
    }

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
    prev.detailedDescription === next.detailedDescription &&
    JSON.stringify(prev.sessions) === JSON.stringify(next.sessions)
)

export default CardItem
