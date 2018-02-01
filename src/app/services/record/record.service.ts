import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestoreModule } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Record } from '../../models/Record';
import { AngularFireModule } from 'angularfire2';

@Injectable()
export class RecordService {
  recordsCollection: AngularFirestoreCollection<Record>;
  records: Observable<Record[]>;
  recordDocument: AngularFirestoreDocument<Record>;

  constructor(public angularFirestore:AngularFirestore) {
    this.recordsCollection = this.angularFirestore.collection('users') 

  }

}
