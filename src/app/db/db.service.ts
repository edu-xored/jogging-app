import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { User } from './db-data';

@Injectable()
export class DbService {

  users: Observable<User[]>;

  constructor(private angularFirestore: AngularFirestore) {
    this.users = this.angularFirestore.collection('users').valueChanges();
  }

}
