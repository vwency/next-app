import React from 'react'
import '@/styles/Header/menu/index.scss'
import FastText from './FastText'

const textHeadContent = (
  <div className="no-select main__fast__text__wrapper">
    <FastText />
  </div>
)

const MainTextHead = () => {
  return <>{textHeadContent}</>
}

export default MainTextHead
