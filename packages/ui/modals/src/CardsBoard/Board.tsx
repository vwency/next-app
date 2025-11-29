import React, { useState, useCallback, useMemo } from 'react'
import { createPortal } from 'react-dom'
import { useLockBodyScroll, useMountedAnimation } from '@ui/hooks'
import { CardGrid } from '@ui/advertisements'
import { galleryItems } from './Items'
import { DetailedModal } from '../index'
import { CardItemProps, GalleryItem, ModalProps } from '@shared/interfaces'
import styles from './styles/index.module.scss'

const CLOSE_ICON_SIZE = 20
const MODAL_CLOSE_TIMEOUT = 300

const DetailedCardModalContent: React.FC<ModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { mounted, animating } = useMountedAnimation(
    isOpen,
    MODAL_CLOSE_TIMEOUT
  )
  useLockBodyScroll(isOpen)
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [showDescription, setShowDescription] = useState(false)

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose()
    },
    [onClose]
  )

  const handleCloseClick = useCallback(() => onClose(), [onClose])

  const handleItemClick = useCallback((item: CardItemProps) => {
    requestAnimationFrame(() => {
      setSelectedItem({
        ...item,
        alt: item.alt || item.description,
      } as GalleryItem)
    })
  }, [])

  const handleSelectedItemClose = useCallback(() => setSelectedItem(null), [])

  const handleBodyClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose()
      }
    },
    [onClose]
  )

  const overlayClassName = useMemo(
    () =>
      `${styles.modalOverlay} ${
        isOpen ? styles.modalOpen : styles.modalCloseState
      }`,
    [isOpen]
  )

  if (!mounted || (!isOpen && !animating)) return null

  const mainModal = (
    <div
      className={overlayClassName}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className={styles.modalContentWrapper}>
        <div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className={styles.modalClose}
            onClick={handleCloseClick}
            aria-label="Закрыть модальное окно"
            type="button"
          >
            <svg
              width={CLOSE_ICON_SIZE}
              height={CLOSE_ICON_SIZE}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <main className={styles.modalBody}>
            <h1 id="modal-title" className={styles.modalTitle}>
              Галерея картинок
            </h1>
            <CardGrid
              items={galleryItems.map((item) => ({
                ...item,
                alt: item.alt || item.description,
              }))}
              onItemClick={handleItemClick}
            />
          </main>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {createPortal(mainModal, document.body)}
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
              className={styles.modalImage}
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
    </>
  )
}

export const MainPageModal = React.memo(DetailedCardModalContent)
