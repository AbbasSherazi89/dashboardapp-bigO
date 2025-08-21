import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material/material-module';
@Component({
  selector: 'app-user-menu',
  imports: [MaterialModule],
  template: `
    <button [matMenuTriggerFor]="menu" mat-icon-button>
      <mat-icon>person_outline</mat-icon>
    </button>
    <mat-menu #menu="matMenu" class="user-menu">
      <div class="user-info">
        <div class="avatar">
          <mat-icon>account_circle</mat-icon>
        </div>
        <div class="user-details">
          <h4>Ibne Abbas 🖖</h4>
          <span>ibne.abbas89@gmail.com</span>
        </div>
      </div>
      <button class="menu-item" mat-menu-item>
        <mat-icon>settings</mat-icon>
        <span>Settings</span>
      </button>
      <button class="menu-item" mat-menu-item>
        <mat-icon>share</mat-icon>
        <span>Share</span>
      </button>
      <button class="menu-item" mat-menu-item>
        <mat-icon>lock_reset</mat-icon>
        <span>Change Password</span>
      </button>
      <div class="logout">
        <button mat-button>
          <mat-icon>logout</mat-icon>
          <span>Logout</span>
        </button>
      </div>
    </mat-menu>
  `,
  styles: `
  .menu-item{
    color:grey;
    mat-icon{
      color:grey;
    }
  }
  .user-menu {
      width: 250px;
    }
    .user-info {
      padding: 16px;
      display: flex;
      align-items: center;
      background: #04a9f5;
      color:#fff;
    }
    .avatar {
      margin-right: 12px;
    }
    .avatar mat-icon {
      font-size: 40px;
      width: 40px;
      height: 40px;
    }
    .user-details h4 {
      margin: 0 0 4px 0;
      font-size: 16px;
    }
    .user-details span {
      font-size: 14px;
    }
    .logout {
      padding:16px;
      button{
        width:100%;
        background: #04a9f5;
        color:#fff;
      }
    }
  `,
})
export class UserMenu {}
