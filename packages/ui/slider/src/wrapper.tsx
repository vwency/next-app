'use client'

import React from 'react'
import { Slider } from './Slider'
import './styles/slider.scss'

const MainSliderContent = (
  <div className="slider__wrapper">
    <Slider />
  </div>
)

export const MainSlider = () => {
  return <>{MainSliderContent}</>
}
