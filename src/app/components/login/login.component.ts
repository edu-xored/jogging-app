import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})

export class LoginComponent implements OnInit {

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  loginWithGoogle() {
    this.userService.loginWithGoogle();
    this.router.navigate(['/reports']);
  }

  loginWithGithub() {
    this.userService.loginWithGithub();
    this.router.navigate(['/reports']);
  }

}
