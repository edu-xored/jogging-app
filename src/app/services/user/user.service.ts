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

  currentUser: firebase.User | null;

  constructor(private _angularFireAuth: AngularFireAuth, private router: Router) {
    _angularFireAuth.authState.subscribe((user: firebase.User) => this.currentUser = user);
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
      })
      .catch((error) =>
        console.error());
  }

  logout() {
    this._angularFireAuth.auth.signOut()
      .then((success) => {
        console.log('User was logged out.');
        this.router.navigate(['login']);
      });
  }

  get currentUserName(): string {
    return (this.currentUser !== null) ? this.currentUser.displayName : '';
  }

  get authenticated(): boolean {
    return this.currentUser !== null;
  }

  get currentUserId(): string {
    return this.currentUser.uid;
  }
}
