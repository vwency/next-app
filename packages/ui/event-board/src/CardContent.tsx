import React, { useState, useCallback } from 'react'
import { CardGrid } from '@ui/advertisements'
import { Items } from './Items'
import { DetailedModal } from '@ui/modals'
import { CardItemProps } from '@shared/interfaces'
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

  const handleBuyTicket = useCallback(() => {}, [selectedItem])

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
                <button
                  type="button"
                  onClick={handleBuyTicket}
                  className={styles.buyButton}
                >
                  Купить билет
                </button>
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
