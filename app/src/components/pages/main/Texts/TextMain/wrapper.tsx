import React from 'react'
import '@/styles/Header/menu/index.scss'
import TextMain from './TextMain'

const wrapper = (
  <div className="no-select main__text__main__wrapper">
    <TextMain />
  </div>
)

const MainText = () => {
  return <>{wrapper}</>
}

export default MainText
