import { Component } from '@angular/core';
import { Sidebar } from "./components/sidebar/sidebar";
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Sidebar, RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  isSidebarVisible = true;

  onComponentActivate(component: any) {
    // Check if the activated component has toggleSidebar output
    if (component && component.toggleSidebar) {
      component.toggleSidebar.subscribe(() => {
        this.toggleSidebar();
      });
    }
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}