'use client'

import React, { forwardRef } from 'react'
import Link from 'next/link'
import styles from '../styles/index.module.scss'
import { MainMenuProps } from '@shared/interfaces'

const MainMenu = forwardRef<HTMLDivElement, MainMenuProps>(
  ({ contentRef, isOpen, toggleMenu }, ref) => {
    return (
      <div className={styles.menuWrapper} ref={ref}>
        <div className={styles.menuLogo}>
          <div className={styles.menuLogoText}>КиноАфиша</div>
        </div>

        <div className={styles.menuOptions}>
          <button
            className={`${styles.menuToggle} ${isOpen ? styles.open : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>

          <ul className={`${styles.listInline} ${isOpen ? styles.active : ''}`}>
            <li className={styles.listInlineItem}>Премьеры</li>
            <li className={styles.listInlineItem}>
              <Link href="/afisha">Афиша</Link>
            </li>
            <li className={styles.listInlineItem}>Кинотеатры</li>
            <li className={styles.listInlineItem}>О нас</li>
          </ul>
        </div>

        <div className={styles.menuRefferal}>
          <ul className={styles.listInlineRefferal}>
            <li className={styles.listInlineRefferalItem}>
              <img src="assets/mdi_github.svg" alt="GitHub" />
            </li>
            <li className={styles.listInlineRefferalItem}>
              <img src="assets/mdi_discord.svg" alt="Discord" />
            </li>
            <li className={styles.listInlineRefferalItem}>
              <img src="assets/mdi_reddit.svg" alt="Reddit" />
            </li>
            <li className={styles.listInlineRefferalItem}>
              <img src="assets/mdi_twitter.svg" alt="Twitter" />
            </li>
          </ul>
        </div>
      </div>
    )
  }
)

MainMenu.displayName = 'MainMenu'

export default MainMenu
