export type CardType = 'type1' | 'type2' | 'rating' | 'user';

export interface CardData {
  type: CardType;
  title?: string;
  icon?: string;
  value?: string;
  percentage?: number;
  percentage2?:number;
  percentage3?:number;
  percentage4?:number;
  percentage5?:number;
  description?: string;
  progressBars?: { value: number; color?: string }[];
  ratingData?: { stars: number; count: number; percentage: number }[];
  iconColor?: string;
  progressColor?: string;
  progressColor2?: string;
  userData?: {
    avatar: string;
    avatarColor?: string;
    name: string;
    description: string;
    date: string;
  }[];
}
