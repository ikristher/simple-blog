import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {catchError} from "rxjs/operators";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user = {
    name: '',
    email: '',
    password: ''
  }
  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  register(){
    this.service.register(this.user.email, this.user.password, this.user.name).subscribe(res => {
      alert('you are registered');
      this.service.login(this.user.email, this.user.password).subscribe(res => {
        this.router.navigate([''])
      })

    })
  }

}
