import React, { useState, useCallback } from 'react'
import { CardGrid } from '@ui/advertisements'
import { galleryItems } from './Items'
import { DetailedModal } from '@ui/modals'
import { CardItemProps, GalleryItem } from '@shared/interfaces'
import styles from './styles/index.module.scss'

export const EventBoard: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [showDescription, setShowDescription] = useState(false)

  const handleItemClick = useCallback((item: CardItemProps) => {
    console.log('activated element', item)
    requestAnimationFrame(() => {
      setSelectedItem({
        ...item,
        alt: item.alt || item.description,
      } as GalleryItem)
    })
  }, [])

  const handleSelectedItemClose = useCallback(() => setSelectedItem(null), [])

  return (
    <div className={styles.galleryWrapper}>
      <div className={styles.gallery}>
        <CardGrid
          items={galleryItems.map((item) => ({
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
            <div
              className={styles.imageWrapper}
              onMouseEnter={() => setShowDescription(true)}
              onMouseLeave={() => setShowDescription(false)}
            >
              <img
                src={selectedItem.image}
                alt={selectedItem.alt}
                loading="lazy"
                decoding="async"
                className={styles.galleryImage}
              />
              {selectedItem.detailedDescription && (
                <div
                  className={`${styles.detailedDescription} ${showDescription ? styles.visible : ''}`}
                >
                  {selectedItem.detailedDescription}
                </div>
              )}
            </div>
          </DetailedModal>
        )}
      </div>
    </div>
  )
}
