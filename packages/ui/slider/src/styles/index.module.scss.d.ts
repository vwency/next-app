export interface ISliderModuleScss {
  sliderWrapper: string
  slider: string
  sliderViewport: string
  sliderContainer: string
  sliderSlide: string
  sliderImage: string
  sliderNavigation: string
  sliderNavButton: string
  sliderNavButtonPrev: string
  sliderNavButtonNext: string

  sliderHoverNav: string
  sliderCornerNav: string
  sliderBottomCenterNav: string
  sliderMinimalNav: string
  sliderVerticalNav: string
  sliderLargeNav: string

  // responsive
  sliderNavButtonResponsive: string
  sliderNavButtonPrevResponsive: string
  sliderNavButtonNextResponsive: string
  sliderCornerNavResponsive: string
}

declare const styles: ISliderModuleScss
export default styles
