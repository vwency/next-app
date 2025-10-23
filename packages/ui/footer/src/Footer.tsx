import React, { useEffect, useRef } from 'react'
import styles from './styles/index.module.scss'

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const scrollTop = window.scrollY
        footerRef.current.style.backgroundPositionY = `${scrollTop * 0.5}px`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={styles.footer_wrapper}>
      <div ref={footerRef} className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.brand}>
            <h2>MyBrand</h2>
            <p>© {new Date().getFullYear()} MyBrand. All rights reserved.</p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/careers">Careers</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/docs">Docs</a>
                </li>
                <li>
                  <a href="/support">Support</a>
                </li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4>Follow Us</h4>
              <div className={styles.socials}>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Footer }
