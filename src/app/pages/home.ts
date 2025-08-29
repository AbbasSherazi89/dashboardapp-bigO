import { Component, Output, EventEmitter } from '@angular/core';
import { Navbar } from '../components/header/navbar';
import { Footer } from '../components/footer/footer';
import { Hero } from '../components/hero';
import { MaterialModule } from '../shared/material/material-module';

@Component({
  selector: 'app-home',
  imports: [Navbar, Footer, Hero, MaterialModule],
  template: `
    <div class="container">
      <div class="header">
        <app-navbar (toggleSidebar)="onToggleSidebar()"></app-navbar>
      </div>
      <div class="mainContent">
        <app-hero></app-hero>
      </div>
      <div class="footer">
        <app-footer></app-footer>
      </div>
    </div>
  `,
  styles: `
 
 .container{
    width:100%;
    display: flex;
    flex-direction: column;
 }

  `,
})
export class Home {
  @Output() toggleSidebar = new EventEmitter<void>();

  onToggleSidebar() {
    this.toggleSidebar.emit();
    console.log('toggled');
  }
}
