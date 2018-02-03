import { Component, Input,  OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  constructor(private userService: UserService) { }

  signOut() {
    this.userService.logout();
  }
}



