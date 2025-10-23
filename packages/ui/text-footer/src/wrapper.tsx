import React from 'react'
import styles from './styles/index.module.scss'
import FooterText from './text'

const textHeadContent = (
  <div
    className={`${styles['no-select']} ${styles.main__footer__text__wrapper}`}
  >
    <FooterText />
  </div>
)

export const MainFooterText = () => {
  return <>{textHeadContent}</>
}

export default MainFooterText
