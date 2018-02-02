import { Component, OnInit } from '@angular/core';
import { routes } from '../../core/app.routes';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})

export class LoginComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  loginWithGoogle() {
    this.userService.loginWithGoogle();
  }

  loginWithGithub() {
    this.userService.loginWithGithub();
  }

}
