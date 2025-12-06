'use client'

import React from 'react'
import Link from 'next/link'
import styles from '../styles/mobile/index.module.scss'

interface MobileMenuProps {
  isOpen: boolean
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  return (
    <ul className={`${styles.mobileMenu} ${isOpen ? styles.active : ''}`}>
      <li className={styles.mobileMenuItem}>Премьеры</li>
      <li className={styles.mobileMenuItem}>
        <Link href="/afisha">Афиша</Link>
      </li>
      <li className={styles.mobileMenuItem}>Кинотеатры</li>
      <li className={styles.mobileMenuItem}>О нас</li>
    </ul>
  )
}

export default MobileMenu
