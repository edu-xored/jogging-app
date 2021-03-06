import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@firebase/auth-types';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

/**
 * Service that provides user data and allows login/logout.
 */
@Injectable()
export class UserService {

  currentUser: Observable<User | null>;
  authenticated: Observable<boolean>;

  constructor(private _angularFireAuth: AngularFireAuth, private router: Router) {
    this.currentUser = this._angularFireAuth.authState;
    this.authenticated = this._angularFireAuth.authState.map(user => !!user);
  }

  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.login(provider);
  }

  loginWithGithub() {
    const provider = new firebase.auth.GithubAuthProvider();
    this.login(provider);
  }

  private login(provider: firebase.auth.AuthProvider) {
    return this._angularFireAuth.auth.signInWithPopup(provider)
      .then((success) => {
        console.log('User was logged in.');
        this.router.navigate(['/reports']); // это по-хорошему в абстракции повыше должно находиться
      })
      .catch(error => console.log('Error at loginService: ', error));
  }

  logout() {
    this._angularFireAuth.auth.signOut()
      .then((success) => {
        console.log('User was logged out.');
        this.router.navigate(['/login']);
      });
  }

  get currentUserName(): string {
    return this._angularFireAuth.auth.currentUser.displayName;
  }

  get currentUserId(): string {
    return this._angularFireAuth.auth.currentUser.uid;
  }
}
