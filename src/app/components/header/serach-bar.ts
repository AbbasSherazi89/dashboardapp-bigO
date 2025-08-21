import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material/material-module';

@Component({
  selector: 'app-search-bar',
  imports: [MaterialModule],
  template: `
    <button mat-icon-button [matMenuTriggerFor]="searchMenu">
      <mat-icon>search</mat-icon>
    </button>

    <mat-menu #searchMenu="matMenu" class="search-menu" (click)="$event.stopPropagation()">
      <div class="search-container" (click)="$event.stopPropagation()">
        <mat-form-field appearance="outline" class="search-field">
          <input matInput placeholder="Search here..." (click)="$event.stopPropagation()" />
        </mat-form-field>
      </div>
    </mat-menu>
  `,
  styles: [
    `
      ::ng-deep .search-menu {
        width: 350px !important;
        max-width: none !important;
      }
      mat-form-field{
        width:100%;
      }
    `,
  ],
})
export class SerachBar {}
