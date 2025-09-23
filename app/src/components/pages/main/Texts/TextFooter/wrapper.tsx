import React from 'react'
import '@/styles/Header/menu/index.scss'
import FooterText from './TextFooter'

const textHeadContent = (
  <div className="no-select main__footer__text__wrapper">
    <FooterText />
  </div>
)

const MainFooterText = () => {
  return <>{textHeadContent}</>
}

export default MainFooterText
