export enum SessionType {
  STANDARD = 'standard',
  VIP = 'vip',
}

export enum SessionFormat {
  TWO_D = '2D',
  THREE_D = '3D',
}

export interface Session {
  room_id: number
  timestamp: number
  type: SessionType
  format?: SessionFormat
  price?: number
}

export interface CardItemProps {
  image: string
  alt?: string
  description: string
  detailedDescription?: string
  sessions?: Session[]
  genre?: string
  director?: string
  cast?: string
  runtime?: string
  country?: string
  releaseYear?: number
  ageRating?: string
  eventTimes?: string[]
  premiere?: string
  trailerUrl?: string
}
