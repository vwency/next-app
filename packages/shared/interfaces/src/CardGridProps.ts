import { CardItemProps } from './CardItemProps'

export interface CardGridProps {
  items: CardItemProps[]
  onItemClick?: (item: CardItemProps) => void
}
