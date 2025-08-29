import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material/material-module';
@Component({
  selector: 'app-user-notification',
  imports: [MaterialModule],
  template: `
    <button [matMenuTriggerFor]="menu" mat-icon-button>
      <mat-icon matBadge="3" matBadgeSize="small" class="custom-badge">notifications_none</mat-icon>
    </button>
    <mat-menu #menu="matMenu" class="user-notification">
      <div class="noti-head">
        <p style="font-size: 18px;">Notifications</p>
        <p style="font-size: 13px; color:#0facf5">Mark all read</p>
      </div>
      <p style="font-size: 16px; color:grey; margin-bottom:10px">Today</p>
      <button mat-menu-item class="btn-card">
        <mat-icon> person_pin</mat-icon>
        <div class="btn-card-body">
          <div class="card-body-head">
            <p style="font-size: 16px;">UI/UX Design</p>
            <p style="font-size: 10px; color:grey">2 min ago</p>
          </div>
          <p style="color: grey;">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto omnis odio provident
            aperiam consectetur doloremque corporis ex! Aliquam doloremque labore eligendi adipisci.
          </p>
        </div>
      </button>
      <button mat-menu-item class="btn-card">
        <mat-icon> person_pin</mat-icon>
        <div class="btn-card-body">
          <div class="card-body-head">
            <p style="font-size: 16px;">Message</p>
            <p style="font-size: 10px; color:grey">1 hour ago</p>
          </div>
          <p style="color: grey;">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. consectetur doloremque
            corporis ex! Aliquam doloremque labore eligendi adipisci.
          </p>
        </div>
      </button>
      <p style="font-size: 16px; color:grey; margin-bottom:10px">Yesterday</p>
      <button mat-menu-item class="btn-card">
        <mat-icon> person_pin</mat-icon>
        <div class="btn-card-body">
          <div class="card-body-head">
            <p style="font-size: 16px;">Forms</p>
            <p style="font-size: 10px; color:grey">2 hours ago</p>
          </div>
          <p style="color: grey;">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, alias nisi! Eum fugit
            cupiditate minus tempora. Adipisci, nesciunt quo voluptate dolor ex quod quisquam harum
            eius eos expedita ea ut!
          </p>
        </div>
      </button>
      <button mat-menu-item class="btn-card">
        <mat-icon> person_pin</mat-icon>
        <div class="btn-card-body">
          <div class="card-body-head">
            <p style="font-size: 16px;">Challenge invitation</p>
            <p style="font-size: 10px; color:grey">12 hours ago</p>
          </div>
          <p style="color: grey;">Jonny aber invites to join the challenge</p>
          <div class="btns">
            <button matButton="outlined">Decline</button>
            <button matButton="outlined" class="primary-btn">Accept</button>
          </div>
        </div>
      </button>
      <button mat-menu-item class="btn-card">
        <mat-icon> person_pin</mat-icon>
        <div class="btn-card-body">
          <div class="card-body-head">
            <p style="font-size: 16px;">Security</p>
            <p style="font-size: 10px; color:grey">5 hours ago</p>
          </div>
          <p style="color: grey;">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, alias nisi! Eum fugit
            cupiditate minus tempora. Voluptate dolor ex quod quisquam harum eius eos expedita ea
            ut!
          </p>
        </div>
      </button>
      <p style="font-size: 16px; color:red; margin:20px 0px; text-align:center;">
        Clear all Notifications
      </p>
    </mat-menu>
  `,
  styles: `
 ::ng-deep .user-notification {
  width: 400px !important;
  max-width: none !important;
  padding:16px;
}
.noti-head{
  display:flex;
  justify-content:space-between;
  margin-bottom:10px;
}
.btn-card{
  padding:5px;
  display:flex;
  mat-icon{
    font-size:40px;
    width:40px;
    height:40px;
  }
.btn-card-body{
    display:flex;
    flex-direction:column;
      .card-body-head{
        margin-bottom:10px;
        display:flex;
        justify-content:space-between;
      }
}
}
.btns{
  display:flex;
  justify-content:center;

  .primary-btn{
    background:#04a9f5;
    margin-left:5px;
    color:#fff;
  }
}

  `,
})
export class UserNotification {}
