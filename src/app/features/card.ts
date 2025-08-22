import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MaterialModule } from '../shared/material/material-module';
import { CardData } from '../interfaces/card-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [MaterialModule, CommonModule],
  template: `
    <mat-card class="reusable-card">
      @if (data.title) {
      <mat-card-header>
        <mat-card-title class="card-title">{{ data.title }}</mat-card-title>
      </mat-card-header>
      }

      <mat-card-content>
        @switch (data.type) {
        <!-- Type 1 Cards -->
        @case ('type1') {
        <div class="card-content">
          <div class="icon-text-row">
            @if (data.icon) {
            <mat-icon [style.color]="data.iconColor">{{ data.icon }}</mat-icon>
            }
            <span>{{ data.value }}</span>
            <span class="spacer"></span>
            <span>{{ data.percentage }}%</span>
          </div>
          <div class="progress-bar">
            <div
              class="progress-fill"
              [style.width.%]="data.percentage"
              [style.backgroundColor]="data.progressColor"
            ></div>
          </div>
        </div>
        }
        <!-- Type 2 Cards -->
        @case ('type2') {
        <div class="card-content">
          <div class="card2-main">
            @if (data.icon) {
            <i [style.color]="data.iconColor" [ngClass]="data.icon"></i>
            }
            <div class="card2-content">
              <span>{{ data.value }}</span>
              <span>{{ data.description }}</span>
            </div>
          </div>
          <mat-divider></mat-divider>
          <div class="progressbar-container">
            <div class="p-1">
              <p>Target:35,098</p>
              <div class="progress-bar1">
                <div
                  class="progress-fill"
                  [style.width.%]="data.percentage"
                  [style.backgroundColor]="data.progressColor"
                ></div>
              </div>
            </div>
            <div class="p-2">
              <p>Duration:350</p>
              <div class="progress-bar2">
                <div
                  class="progress-fill"
                  [style.width.%]="data.percentage2"
                  [style.backgroundColor]="data.progressColor2"
                ></div>
              </div>
            </div>
          </div>
        </div>
        }
        <!-- Type Rating Cards -->
        @case ('rating') {
        <div class="rating-card">
          <mat-divider></mat-divider>
          <div class="rating-card-row">
            <span class="rating-val"
              >{{ data.value }} <i [style.color]="data.iconColor" [ngClass]="data.icon"></i
            ></span>
            <span class="spacer"></span>
            <span>{{ data.percentage }}</span>
          </div>
          <!-- bar 1 -->
          <div class="stars">
            <span>5 <i [style.color]="data.iconColor" [ngClass]="data.icon"></i> </span>
            <span class="spacer"></span>
            <span>384</span>
          </div>
          <div class="rating-bar1">
            <div
              class="progress-fill"
              [style.width.%]="data.percentage"
              [style.backgroundColor]="data.progressColor"
            ></div>
          </div>

          <!-- bar 2 -->
          <div class="stars">
            <span>4 <i [style.color]="data.iconColor" [ngClass]="data.icon"></i></span>
            <span class="spacer"></span>
            <span>145</span>
          </div>
          <div class="rating-bar1">
            <div
              class="progress-fill"
              [style.width.%]="data.percentage2"
              [style.backgroundColor]="data.progressColor"
            ></div>
          </div>

          <!-- bar 3 -->
          <div class="stars">
            <span>3 <i [style.color]="data.iconColor" [ngClass]="data.icon"></i></span>
            <span class="spacer"></span>
            <span>24</span>
          </div>
          <div class="rating-bar1">
            <div
              class="progress-fill"
              [style.width.%]="data.percentage3"
              [style.backgroundColor]="data.progressColor"
            ></div>
          </div>
          <!-- bar 4 -->
          <div class="stars">
            <span>2 <i [style.color]="data.iconColor" [ngClass]="data.icon"></i></span>
            <span class="spacer"></span>
            <span>1</span>
          </div>
          <div class="rating-bar1">
            <div
              class="progress-fill"
              [style.width.%]="data.percentage4"
              [style.backgroundColor]="data.progressColor"
            ></div>
          </div>
          <!-- bar 5 -->
          <div class="stars">
            <span>1 <i [style.color]="data.iconColor" [ngClass]="data.icon"></i></span>
            <span class="spacer"></span>
            <span>0</span>
          </div>
          <div class="rating-bar1">
            <div
              class="progress-fill"
              [style.width.%]="data.percentage5"
              [style.backgroundColor]="data.progressColor"
            ></div>
          </div>
        </div>
        }
        <!-- Type User Cards -->
       @case ('user') {
        <div class="user-content">
          <mat-divider></mat-divider>
          <!-- Loop through each user in userData array -->
          @for (user of data.userData; track user; let last = $last) {
            <div class="user-card-row">
              <!-- Use mat-icon for avatar or display initials -->
              <i [style.color]="user.avatarColor" [ngClass]="user.avatar"></i>

              <div class="user-info">
                <p>{{ user.name }}</p>
                <p>{{ user.description }}</p>
              </div>
              <span>{{ user.date }}</span>
              <div class="action">
                <button class="reject-btn" mat-button (click)="onReject.emit(user)">
                  Reject
                </button>
                <button class="approve-btn" mat-button (click)="onApprove.emit(user)">
                  Approve
                </button>
              </div>
            </div>
            
            <!-- Add divider if not the last item -->
            @if (!last) {
              <mat-divider></mat-divider>
            }
          }
        </div>
      }
    }
      </mat-card-content>
    </mat-card>
  `,
  styles: `
   .reusable-card {
      background: white;
      border-radius: 4px;
      height: 100%;
      box-sizing: border-box;
    }
     .card-title {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 16px;
      color: rgba(0, 0, 0, 0.87);
    }
    .card-content {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    
    .progress-bar {
      height: 8px;
      background-color: #e0e0e0;
      border-radius: 4px;
      overflow: hidden;
    }
    
    .progress-fill {
      height: 100%;
      transition: width 0.3s ease;
    }
    .p-1, .p-2{
      flex:1;
      height:50px;
      p{
        text-align:center;
        margin-bottom:10px;
      }
    }
    .progress-bar1,
    .progress-bar2 {
      height: 8px;
      background-color: #e0e0e0;
      border-radius: 4px;
      overflow: hidden;
       .progress-fill {
      height: 100%;
      transition: width 0.3s ease;
    }
}

.rating-bar1{
    height: 8px;
      background-color: #e0e0e0;
      border-radius: 4px;
      overflow: hidden;
      margin:20px 0px;
       .progress-fill {
      height: 100%;
      transition: width 0.3s ease;
    }

}

    .progressbar-container{
      display:flex;
      gap: 20px;
      align-items:center;
    }
      .icon-text-row {
      display: flex;
      align-items: center;
      gap: 8px;
      mat-icon{
        font-size:40px;
        height:40px;
        width:40px;
      }
    }
    
    .spacer {
      flex: 1;
    }

    .card2-main{
      height:80px;
      display: flex;
      align-items: center;
      justify-content: space-between;
       i{
        font-size:60px;
        height:60px;
        width:60px;
      }
      .card2-content{
        display: flex;
        flex-direction: column;
        gap: 4px;
        span{
          text-align:right;
        }
      }
    }

    .rating-card{
       .progressbar-container{
      display:flex; 
      flex-direction: column;
      gap: 20px;
    }
    .stars{
      display:flex;
    }
  }

  .rating-card-row{
    display:flex;
    align-items:center;
    .rating-val{
      font-size: 32px;
      margin:20px 0;
    }
  }

  .user-card-row{
    margin-top:20px;
    min-height: 60px;
    display:flex;
    justify-content:space-between;
    align-items:center;

    i{
      font-size: 40px;
      height: 40px;
      width: 40px;
    }

    .action{
      display:flex;
      gap:10px;
      .reject-btn{
        background:#9297d4;
        color:#fff;
      }
      .approve-btn{
        background:#1dd3d4;
        color:#fff;
      }
    }
  }
   `,
})
export class Card {
  @Input() data!: CardData;
  @Output() onApprove = new EventEmitter<any>();
  @Output() onReject = new EventEmitter<any>();

    getUserInitials(name: string): string {
    return name.split(' ').map(part => part[0]).join('').toUpperCase();
  }
}
