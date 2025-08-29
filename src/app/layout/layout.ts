import { Component, Output, EventEmitter } from '@angular/core';
import { Navbar } from '../components/header/navbar';
import { Footer } from '../components/footer/footer';
import { CommonModule } from '@angular/common'; // Add this

@Component({
  selector: 'app-layout',
  imports: [Navbar, Footer, CommonModule], // Add CommonModule here
  template: `
    <div class="container">
      <div class="header">
        <app-navbar (toggleSidebar)="onToggleSidebar()"></app-navbar>
      </div>
      <div class="mainContent">
        <ng-content></ng-content>
      </div>
      <div class="footer">
        <app-footer></app-footer>
      </div>
    </div>
  `,
  styles: `
    .container {
      width: 100%;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    .mainContent {
      flex: 1;
      width: 100%;
    }
  `,
})
export class Layout {
  @Output() toggleSidebar = new EventEmitter<void>();

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
}