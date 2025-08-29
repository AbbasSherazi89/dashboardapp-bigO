import { Component, Output, EventEmitter } from '@angular/core';
import { Hero } from '../components/hero';
import { MaterialModule } from '../shared/material/material-module';
import { Layout } from "../layout/layout";

@Component({
  selector: 'app-home',
  imports: [Hero, MaterialModule, Layout],
  template: `
     <app-layout (toggleSidebar)="onToggleSidebar()">
      <app-hero></app-hero>
    </app-layout>
  `,
  styles: `

  `,
})
export class Home {
  @Output() toggleSidebar = new EventEmitter<void>();

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
}

