import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { Report } from '../../models/Report';

/**
 * Service that allows to get records list, add, edit, delete records from concrete user.
 */
@Injectable()
export class ReportService {

  reportsCollection: AngularFirestoreCollection<Report>;
  reports: Observable<Report>;
  reportDocument: AngularFirestoreDocument<Report>;

  constructor(public angularFirestore: AngularFirestore) {

  }

  getReports(): Observable<Report> {
    return null;
  }

  addReport(record: Report) { }

  deleteReport(Record: Report) { }

}
