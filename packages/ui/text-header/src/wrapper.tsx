import React from 'react'
import './styles/index.scss'
import FastText from './text'

const textHeadContent = (
  <div className="no-select main__fast__text__wrapper">
    <FastText />
  </div>
)

export const MainTextHead = () => {
  return <>{textHeadContent}</>
}

export default MainTextHead
