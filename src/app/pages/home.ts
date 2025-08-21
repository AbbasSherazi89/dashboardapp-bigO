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
        <h4>Default</h4>
        <p style="color:grey">
          Home <mat-icon>arrow_forward_ios</mat-icon> Dashboard
          <mat-icon>arrow_forward_ios</mat-icon> Default
        </p>
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
 .mainContent h4{
   padding: 10px 16px;
 }
 .mainContent p{
  display: flex;
  align-items: center;
  padding: 10px 16px;
  margin-bottom:20px;
  mat-icon{
    font-size: 16px;
    height:16px;
    width:16px;
  }
 }
  `,
})
export class Home {
  @Output() toggleSidebar = new EventEmitter<void>();

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
}
