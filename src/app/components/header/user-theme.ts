import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material/material-module';
@Component({
  selector: 'app-user-theme',
  imports: [MaterialModule],
  template: `
    <button [matMenuTriggerFor]="menu" mat-icon-button>
      <mat-icon>light_mode</mat-icon>
    </button>
    <mat-menu #menu="matMenu" class="user-theme">
      <button mat-menu-item class="theme-btn">
        <mat-icon>dark_mode</mat-icon>
        <span>Dark</span>
      </button>
      <button mat-menu-item class="theme-btn">
        <mat-icon>light_mode</mat-icon>
        <span>Light</span>
      </button>
      <button mat-menu-item class="theme-btn">
        <mat-icon>contrast</mat-icon>
        <span>Default</span>
      </button>
    </mat-menu>
  `,
  styles: `
  
      ::ng-deep .user-theme {
      width: 200px !important;
      max-width: none !important;
      padding:16px;
    }
    .theme-btn{
    color: grey;
    mat-icon{
      color:grey;
    }
}

  `,
})
export class UserTheme {}
