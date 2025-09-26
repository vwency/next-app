import React, { useRef } from 'react'
import { createPortal } from 'react-dom'
import { ModalProps } from '@shared/interfaces'
import { useModalClose } from '@ui/hooks'
import './DetailedModal.scss'

export const DetailedModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  portalRootId,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null)
  const { handleOverlayClick } = useModalClose({ isOpen, onClose })

  if (!isOpen) return null

  const portalRoot = portalRootId
    ? (document.getElementById(portalRootId) ?? document.body)
    : document.body

  return createPortal(
    <div
      ref={modalRef}
      className="modal-overlay"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={title ?? 'modal'}
      tabIndex={-1}
    >
      <div
        className="modal-content"
        role="document"
        aria-labelledby={title ? 'modal-title' : undefined}
      >
        {title && (
          <header>
            <h2 id="modal-title">{title}</h2>
          </header>
        )}
        <div className="modal-body">{children}</div>
        <footer>
          <button type="button" onClick={onClose} aria-label="Close modal">
            Close
          </button>
        </footer>
      </div>
    </div>,
    portalRoot
  )
}
