import React, { useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { ModalProps } from '@shared/interfaces'
import { useModalClose } from '@ui/hooks'
import styles from './index.module.scss'

export const DetailedModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  portalRootId,
}) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const { handleOverlayClick } = useModalClose({ isOpen, onClose })

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = ''
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  const portalRoot = portalRootId
    ? (document.getElementById(portalRootId) ?? document.body)
    : document.body

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    handleOverlayClick(e)
  }

  return createPortal(
    <div className={styles.modalOverlay} onClick={handleClick}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
      >
        <div className={styles.modalHeader}>
          {title && <h2>{title}</h2>}
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>,
    portalRoot
  )
}
