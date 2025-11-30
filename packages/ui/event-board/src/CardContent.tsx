import React, { useState, useCallback } from 'react'
import { CardGrid } from '@ui/advertisements'
import { Items } from './Items'
import { DetailedModal } from '@ui/modals'
import { CardItemProps, SessionFormat } from '@shared/interfaces'
import styles from './styles/index.module.scss'

export const EventBoard: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<CardItemProps | null>(null)

  const handleItemClick = useCallback((item: CardItemProps) => {
    requestAnimationFrame(() => {
      setSelectedItem({
        ...item,
        alt: item.alt || item.description,
      } as CardItemProps)
    })
  }, [])

  const handleSelectedItemClose = useCallback(() => setSelectedItem(null), [])

  const otherItems = Items.filter((item) => item !== selectedItem).map(
    (item) => ({
      ...item,
      alt: item.alt || item.description,
    })
  )

  return (
    <div className={styles.galleryWrapper}>
      <div className={styles.gallery}>
        <CardGrid
          items={Items.map((item) => ({
            ...item,
            alt: item.alt || item.description,
          }))}
          onItemClick={handleItemClick}
        />

        {selectedItem && (
          <DetailedModal
            isOpen={!!selectedItem}
            onClose={handleSelectedItemClose}
            title={selectedItem.description}
          >
            <div className={styles.contentWrapper}>
              <div className={styles.imageWrapper}>
                <img
                  src={selectedItem.image}
                  alt={selectedItem.alt}
                  loading="lazy"
                  decoding="async"
                  className={styles.galleryImage}
                />
              </div>
              <div className={styles.detailsSection}>
                <div className={styles.detailedDescription}>
                  {selectedItem.detailedDescription || 'Описание отсутствует'}
                </div>

                <div className={styles.sessionsSection}>
                  <h4 className={styles.sessionsTitle}>Время сеансов</h4>
                  <div className={styles.sessionTimes}>
                    {selectedItem.sessions?.map((session, index) => {
                      const date = new Date(session.timestamp * 1000)
                      const timeString = date.toLocaleTimeString('ru-RU', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })
                      const formatText =
                        session.format === SessionFormat.TWO_D ? '2D' : '3D'

                      return (
                        <div key={index} className={styles.sessionTime}>
                          <div className={styles.sessionTimeTop}>
                            {timeString}
                          </div>
                          <div className={styles.sessionTimeBottom}>
                            <span className={styles.sessionFormat}>
                              {formatText}
                            </span>
                            <span className={styles.sessionPrice}>
                              {session.price}₽
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className={styles.infoGrid}>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Жанр:</span>
                    <span className={styles.infoValue}>
                      {selectedItem.genre}
                    </span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Режиссёр:</span>
                    <span className={styles.infoValue}>
                      {selectedItem.director}
                    </span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>В ролях:</span>
                    <span className={styles.infoValue}>
                      {selectedItem.cast}
                    </span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Длительность:</span>
                    <span className={styles.infoValue}>
                      {selectedItem.runtime}
                    </span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Страна:</span>
                    <span className={styles.infoValue}>
                      {selectedItem.country}
                    </span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Год выпуска:</span>
                    <span className={styles.infoValue}>
                      {selectedItem.releaseYear}
                    </span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Возраст:</span>
                    <span className={styles.infoValue}>
                      {selectedItem.ageRating}
                    </span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Премьера:</span>
                    <span className={styles.infoValue}>
                      {selectedItem.premiere}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.relatedEvents}>
              <h3>Другие события</h3>
              <div className={styles.miniatureGrid}>
                {otherItems.map((item, index) => (
                  <div
                    key={index}
                    className={styles.miniatureItem}
                    onClick={() => handleItemClick(item)}
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      className={styles.miniatureImage}
                    />
                    <p className={styles.miniatureDescription}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </DetailedModal>
        )}
      </div>
    </div>
  )
}
