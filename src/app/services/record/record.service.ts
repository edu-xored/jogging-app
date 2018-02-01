import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestoreModule } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Record } from '../../models/Record';

/**
 * Service that allows to get records list, add, edit, delete records from concrete user.
 */
@Injectable()
export class RecordService {

  recordsCollection: AngularFirestoreCollection<Record>;
  records: Observable<Record[]>;
  recordDocument: AngularFirestoreDocument<Record>;

  constructor(public angularFirestore: AngularFirestore) {

  }

  getRecords() { }
  
  addRecord(record: Record) { }

  updateRecord(record: Record) { }

  deleteRecord(record: Record) { }

}
