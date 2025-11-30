export interface GalleryItem {
  image: string
  alt: string
  description: string
  detailedDescription?: string
  genre?: string
  director?: string
  cast?: string
  runtime?: string
  country?: string
  releaseYear?: number
  ageRating?: string
  eventTimes?: string[]
}
