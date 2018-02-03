import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
// import { Observable } from '@firebase/util/dist/esm/src/subscribe';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isAuthorised: Observable<boolean>;

  constructor(private userService: UserService) {
    this.isAuthorised = this.userService.authenticated;
    // this.isAuthorised = this.userService.currentUser.map(currentUser => !!currentUser);
  }

  signOut() {
    this.userService.logout();
  }
}



