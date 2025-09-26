import React, { useState, useCallback } from 'react'
import { CardGrid } from '@ui/advertisements'
import { galleryItems } from './Items'
import { DetailedModal } from '@ui/modals'
import { CardItemProps, GalleryItem } from '@shared/interfaces'
import './styles/index.scss'

export const EventBoard: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  const handleItemClick = useCallback((item: CardItemProps) => {
    console.log('activated elemnet', item)
    requestAnimationFrame(() => {
      setSelectedItem({
        ...item,
        alt: item.alt || item.description,
      } as GalleryItem)
    })
  }, [])

  const handleSelectedItemClose = useCallback(() => setSelectedItem(null), [])

  return (
    <div className="gallery_wrapper">
      <div className="gallery">
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
            <img
              src={selectedItem.image}
              alt={selectedItem.alt}
              loading="lazy"
              decoding="async"
              className="gallery__image"
            />
            {selectedItem.detailedDescription && (
              <p className="gallery__details">
                {selectedItem.detailedDescription}
              </p>
            )}
          </DetailedModal>
        )}
      </div>
    </div>
  )
}
