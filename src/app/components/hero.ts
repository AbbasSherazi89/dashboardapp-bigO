import { Component } from '@angular/core';
import { Card } from '../features/card';
import { CardData } from '../interfaces/card-data';

@Component({
  selector: 'app-hero',
  imports: [Card],
  template: `
    <div class="card-grid">
      <!-- Type 1 Cards -->
      <app-card [data]="type1Card1"></app-card>
      <app-card [data]="type1Card2"></app-card>
      <app-card [data]="type1Card3"></app-card>

      <!-- Type 2 Cards -->
      <app-card [data]="type2Card1"></app-card>
      <app-card [data]="type2Card2"></app-card>
      <app-card [data]="type2Card3"></app-card>

      <!-- Rating Card -->
      <app-card [data]="ratingCard"></app-card>

      <!-- Users Card -->
      <app-card [data]="ratingCard"></app-card>
    </div>
  `,
  styles: `
  .card-grid {
      padding:0px 16px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      //  grid-template-columns: 1fr 3fr;
      gap: 20px;
      margin-bottom: 20px;
    }
      
     @media (max-width: 768px) {
      .card-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

     @media (max-width: 600px) {
      .card-grid {
        grid-template-columns: repeat(1, 1fr);
      }
    }

  `,
})
export class Hero {
  type1Card1: CardData = {
    type: 'type1',
    title: 'Daily Sales',
    icon: 'arrow_upward',
    value: '$ 249.95',
    percentage: 67,
    iconColor: '#1ddcc6',
    progressColor: '#1dc5e8',
  };
  type1Card2: CardData = {
    type: 'type1',
    title: 'Monthly Sales',
    icon: 'arrow_downward',
    value: '$ 2.942.32',
    percentage: 36,
    iconColor: '#f44236',
    progressColor: '#9396d4',
  };
  type1Card3: CardData = {
    type: 'type1',
    title: 'Yearly Sales',
    icon: 'arrow_upward',
    value: '$ 8.638.32',
    percentage: 80,
    iconColor: '#1ddcc6',
    progressColor: '#1dc5e8',
  };
  type2Card1: CardData = {
    type: 'type2',
    icon: 'fab fa-facebook',
    value: '12,281',
    description: '+7.2% Total Likes',
    percentage: 70,
    percentage2: 40,
    iconColor: '#04a9f5',
    progressColor: '#1dd8ce',
    progressColor2: '#9792d4',
  };
  type2Card2: CardData = {
    type: 'type2',
    icon: 'fab fa-twitter',
    value: '11,200',
    description: '+6.2% Total Likes',
    percentage: 30,
    percentage2: 60,
    iconColor: '#04a9f5',
    progressColor: '#1de9b6',
    progressColor2: '#04a9f5',
  };
  type2Card3: CardData = {
    type: 'type2',
    icon: 'fab fa-google-plus-g',
    value: '10500',
    description: '+5.9% Total Likes',
    percentage: 80,
    percentage2: 26,
    iconColor: '#f44236',
    progressColor: '#1dd8ce',
    progressColor2: '#9792d4',
  };
  ratingCard: CardData = {
    type: 'rating',
    title: 'Ratings',
    icon: 'fas fa-star',
    value: '4.7',
    description: '+5.9% Total Likes',
    percentage: 80,
    percentage2: 60,
    percentage3: 40,
    percentage4: 20,
    percentage5: 2,
    iconColor: '#f4c22b',
    progressColor: '#1dd8ce',
    progressColor2: '#9792d4',
  };
}
