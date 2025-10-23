import React, { FC } from 'react'
import styles from '../styles/index.module.scss'
import { MainPageModal } from '@ui/modals'
import { useModal } from '@ui/hooks'

export const LeftButtonMain: FC = () => {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <>
      <button
        className={styles.main__button__left}
        onClick={openModal}
        type="button"
      >
        Смотреть
      </button>

      <MainPageModal isOpen={isOpen} onClose={closeModal} />
    </>
  )
}
