import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {catchError} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };

  constructor(private service: AuthService, private router: Router) {

  }

  ngOnInit() {
  }

  login() {
    this.service.login(this.user.email, this.user.password).subscribe(data => {
      this.router.navigate([''])

    })
  }
}
