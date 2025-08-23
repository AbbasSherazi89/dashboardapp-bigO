import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  template: `
    <div class="container">
      <ul>
        <li>Dashboard</li>
        <li>Typography</li>
        <li>Login</li>
        <li>Register</li>
      </ul>
    </div>
  `,
  styles: `
  
  .container{
    padding-top: 30px;
    ul li:hover{
      background-color: #eee;
      cursor:pointer;
    }
    ul li{
      text-decoration: none;
      list-style: none;
      padding:10px
    }
  }
  `,
})
export class Sidebar {}
