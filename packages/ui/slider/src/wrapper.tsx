'use client'

import React from 'react'
import Slider from './Slider'
import styles from './styles/index.module.scss'

export const MainSlider = () => {
  return (
    <div className={styles.sliderWrapper}>
      <Slider />
    </div>
  )
}

export default MainSlider
