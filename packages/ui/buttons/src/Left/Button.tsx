import React, { FC } from 'react'
import '../styles/LeftButton.scss'
import { MainPageModal } from '@ui/modals'
import { useModal } from '@ui/hooks'

export const LeftButtonMain: FC = () => {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <>
      <button className="main__button__left" onClick={openModal} type="button">
        Смотреть
      </button>

      <MainPageModal isOpen={isOpen} onClose={closeModal} />
    </>
  )
}
