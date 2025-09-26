import React from 'react'
import './styles/index.scss'
import TextMain from './text'

const wrapper = (
  <div className="no-select main__text__main__wrapper">
    <TextMain />
  </div>
)

export const MainText = () => {
  return <>{wrapper}</>
}

export default MainText
