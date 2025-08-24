import { Component, signal } from '@angular/core';
import { Sidebar } from "./components/sidebar/sidebar";
import { Home } from "./pages/home";
import { Typography } from "./pages/typography";

@Component({
  selector: 'app-root',
  imports: [Home, Sidebar, Typography],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // protected readonly title = signal('dashboard');
  isSidebarVisible = true;

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
