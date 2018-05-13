import { Component } from '@angular/core';
import { LoginService } from './shared/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  toggle: boolean
  public isLoggedIn: boolean;
  public loginModal: boolean;
  isAdmin;

  constructor(public _loginService: LoginService) {
    this.toggle = false;
    let user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      if (user.username == "admin") {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    }
  }

  topMenu() {
    this.toggle = !this.toggle;
  }

  login() {
    this._loginService.openModal();
  }
  logout() {
    this._loginService.logout();
    this.isAdmin = false;
  }
}
