import { Component, ViewChild  } from '@angular/core';
import { Sidebar } from "./components/sidebar/sidebar";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Sidebar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
 isSidebarVisible = true;

  @ViewChild(RouterOutlet) outlet!: RouterOutlet;

  ngAfterViewInit() {
    // Listen for custom events from routed components
    this.outlet.activateEvents.subscribe(() => {
      const component = this.outlet.component;
      if (component && 'toggleSidebar' in component) {
        (component as any).toggleSidebar.subscribe(() => {
          this.toggleSidebar();
        });
      }
    });
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
