import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  imports: [],
  template: `
    <div class="container">
      <div class="title">
        <img src="assets/favicon.svg" alt="" />
        <h2>Datta Able</h2>
      </div>
      <ul>
        <li (click)="navigateTo('/dashboard')"><i class="fa-solid fa-house"></i> Dashboard</li>
        <li (click)="navigateTo('/typography')"><i class="fa-brands fa-typo3"></i> Typography</li>
        <li (click)="navigateTo('/login')"><i class="fa-solid fa-right-to-bracket"></i> Login</li>
        <li (click)="navigateTo('/register')"><i class="fa-solid fa-user-plus"></i> Register</li>
      </ul>
    </div>
  `,
  styles: `
  
  .container{
      padding-top: 30px;
      .title{
        padding: 10px;
        display:flex;
        align-items: center;
        gap:10px;
      }
      ul li:hover{
        background-color: #eee;
        cursor:pointer;
        color:#3f4d67;
      }
      ul li{
        text-decoration: none;
        list-style: none;
        padding:10px;
        display:flex;
        align-items:center;
        gap:15px;
        i{
          font-size: 15px;
          height:15px;
          width:15px;
        }
      }
    }
  `,
})
export class Sidebar {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
