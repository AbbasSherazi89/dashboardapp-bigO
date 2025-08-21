import { Component, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserMenu } from './user-menu';
import { UserNotification } from './user-notification';
import { UserSetting } from './user-setting';
import { UserTheme } from './user-theme';
import { SerachBar } from "./serach-bar";

@Component({
  selector: 'app-navbar',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatToolbarModule,
    UserMenu,
    UserNotification,
    UserSetting,
    UserTheme,
    SerachBar
],
  template: `
    <mat-toolbar class="transparent-toolbar">
      <!-- Toggle menu btn -->
      <button mat-icon-button (click)="toggleSidebar.emit()">
        <mat-icon>menu</mat-icon>
      </button>
      <!-- Toggle search btn -->
      <app-search-bar></app-search-bar>
      <!-- Span to align the items after this span towards right side means at the end-->
      <span style="flex: 1 1 auto;"></span>
      <!-- Theme toggle -->
      <app-user-theme></app-user-theme>
      <!-- Setting menu -->
      <app-user-setting></app-user-setting>
      <!-- Notifications menu -->
      <app-user-notification></app-user-notification>
      <!-- User profile menu -->
      <app-user-menu></app-user-menu>
    </mat-toolbar>
  `,
  styles: `
 .transparent-toolbar {
  background: transparent !important;
  color: inherit; /* Keep text color consistent */
}


  `,
})
export class Navbar {
  @Output() toggleSidebar = new EventEmitter<void>();
}
