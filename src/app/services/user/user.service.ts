import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestoreModule } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/User';

@Injectable()
export class UserService {
  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  userDocument: AngularFirestoreDocument<User>;

  constructor(public angularFirestore: AngularFirestore) {
    this.usersCollection = this.angularFirestore.collection('users');
    this.users = this.usersCollection.valueChanges();
  }

  /**
   * @deprecated
   * @param user 
   */
  addUser(user: User) {
    this.usersCollection.add(user);
  }

  /**
   * @deprecated
   * @param user 
   */
  updateUser(user: User) {
    this.userDocument = this.angularFirestore.doc(`users/${user.id}`);
    this.userDocument.update(user);
  }

  /**
   * @deprecated
   * @param user 
   */
  deleteUser(user: User) {
    this.userDocument = this.angularFirestore.doc(`users/${user.id}`);
    this.userDocument.delete();
  }

  getCurrentUserName(): string {
    return "";
  }

  isUserAuthorized(): boolean {
    return true;
  }

}
