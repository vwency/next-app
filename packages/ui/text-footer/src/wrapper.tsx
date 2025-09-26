import React from 'react'
import './styles/index.scss'
import FooterText from './text'

const textHeadContent = (
  <div className="no-select main__footer__text__wrapper">
    <FooterText />
  </div>
)

export const MainFooterText = () => {
  return <>{textHeadContent}</>
}

export default MainFooterText
