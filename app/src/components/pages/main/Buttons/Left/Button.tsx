import React, { FC } from 'react'
import '@/styles/MainLayout/Buttons/Left/index.scss'
import ModalWithGallery from '../../Content/MainModal/ModalWithData/ModalWithGallery'
import { useModal } from '@ui/hooks'

const LeftButtonMain: FC = () => {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <>
      <button className="main__button__left" onClick={openModal} type="button">
        Смотреть
      </button>

      <ModalWithGallery isOpen={isOpen} onClose={closeModal} />
    </>
  )
}

export default LeftButtonMain
