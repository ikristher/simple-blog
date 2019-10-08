import { Component } from '@angular/core';
import {AuthService} from "./services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';
  user;
  constructor(private authService: AuthService, private router: Router){
    this.user = authService.isLoggedIn()
  }

  logout() {
    this.authService.logout()
    alert('You have been logout')
    this.router.navigate(['account/login'])
  }
}
