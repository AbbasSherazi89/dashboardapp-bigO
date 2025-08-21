import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material/material-module';
@Component({
  selector: 'app-user-setting',
  imports: [MaterialModule],
  template: `
    <button [matMenuTriggerFor]="menu" mat-icon-button>
      <mat-icon>settings</mat-icon>
    </button>
    <mat-menu #menu="matMenu" class="user-setting">
      <button mat-menu-item class="setting-item">
        <mat-icon>person</mat-icon>
        <span>My Account</span>
      </button>
      <button mat-menu-item class="setting-item">
        <mat-icon>settings</mat-icon>
        <span>Settings</span>
      </button>
      <button mat-menu-item class="setting-item">
        <mat-icon>support</mat-icon>
        <span>Support</span>
      </button>
      <button mat-menu-item class="setting-item">
        <mat-icon>lock</mat-icon>
        <span>Lock Screen</span>
      </button>
      <button mat-menu-item class="setting-item">
        <mat-icon>logout-circle</mat-icon>
        <span>Logout</span>
      </button>
    </mat-menu>
  `,
  styles: `
  
  ::ng-deep .user-setting {
  width: 250px !important;
  max-width: none !important;
  padding:16px;
}
.setting-item{
  color:grey;
  mat-icon{
    font-size:20px;
    height:20px;
    width:20px;
    color:grey;
  }
}
  `,
})
export class UserSetting {}
