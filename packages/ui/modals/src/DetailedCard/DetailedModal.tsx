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
  const modalRef = useRef<HTMLDivElement | null>(null)
  const { handleOverlayClick } = useModalClose({ isOpen, onClose })

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'

      return () => {
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        document.body.style.overflow = ''
        window.scrollTo(0, scrollY)
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
    <div
      ref={modalRef}
      className={styles.modalOverlay}
      onClick={handleClick}
      role="dialog"
      aria-modal="true"
      aria-label={title ?? 'modal'}
      tabIndex={-1}
    >
      <div
        className={styles.modalContent}
        role="document"
        aria-labelledby={title ? 'modal-title' : undefined}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalHeader}>
          {title && (
            <header>
              <h2 id="modal-title">{title}</h2>
            </header>
          )}
          <button
            type="button"
            onClick={onClose}
            className={styles.closeButton}
            aria-label="Close modal"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
        </div>
        <div className={styles.modalBody}>
          <div>{children}</div>
        </div>
      </div>
    </div>,
    portalRoot
  )
}
