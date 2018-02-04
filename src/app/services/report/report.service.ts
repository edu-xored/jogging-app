import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { Report } from '../../models/Report';
import { UserService } from '../user/user.service';

/**
 * Service that allows to get reports list, add, edit, delete reports for concrete user.
 */
@Injectable()
export class ReportService {

  reportsCollection: AngularFirestoreCollection<Report>;
  reports: Observable<Report[]>;
  reportDocument: AngularFirestoreDocument<Report>;

  constructor(public angularFirestore: AngularFirestore, private _userService: UserService) {
    const userId: string = this._userService.currentUserId;
    this.reportsCollection = angularFirestore.collection<Report>('reports', ref => ref.where('userId', '==', userId));
    this.reports = this.reportsCollection.valueChanges();
  }

  getReports(): Observable<Report[]> {
    return this.reports;
  }

  addReport(report: Report) {
    report.userId = this._userService.currentUserId;
    this.reportsCollection.add(report)
      .then(() => console.log('Report was added.'));
  }

  updateReport(reportId: string, report: Report) {
    this.getReport(reportId).update(report);
  }

  deleteReport(reportId: string) {
    this.getReport(reportId).delete();
  }

  getReport(reportId: string) {
    return this.angularFirestore.doc<Report>(`reports/${reportId}`);
  }
}
