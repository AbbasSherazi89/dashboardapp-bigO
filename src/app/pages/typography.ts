import { Component } from '@angular/core';
import { Layout } from '../layout/layout';

@Component({
  selector: 'app-typography',
  imports: [Layout],
  template: `
    <app-layout>
      <h1 class="font-bold text-green-500">Hello world!</h1>
    </app-layout>
  `,
  styles: ``,
})
export class Typography {}
