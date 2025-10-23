import React from 'react'
import styles from './styles/index.module.scss'

export const FooterTextContent = (
  <div className={`${styles['no-select']} ${styles.footer_text}`}>
    Our technology performing fast blockchain (120K TPS) and it has guaranteed
    AI-based data security. Proof of Stake, its consensus algorithm enables
    unlimited speeds.
  </div>
)

const FooterText = () => {
  return <>{FooterTextContent}</>
}

export default FooterText
