import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
  <div class="footer">
    <p>Sherazi , Built with ♥ for a smoother web presence.</p>
    <p>Distributed by Sherazi</p>
  </div>
  `,
  styles: `
  .footer{
    color:#878787;
    padding: 40px 16px;
    display: flex;
    justify-content: space-between;
  }
  `
})
export class Footer {}
