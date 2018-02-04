import { Component, ViewChild , OnInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { ReportService } from '../../services/report/report.service';
import { Report } from '../../models/Report';
import { SELECT_VALUE_ACCESSOR } from '@angular/forms/src/directives/select_control_value_accessor';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  reports: Report[];
  reportsObservable: Observable<Report[]>;

  displayedColumns = ['Date', 'Distance', 'Time', 'Delete'];
  dataSource = new MatTableDataSource(this.reports);

  constructor(public reportService: ReportService) { }
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.reportsObservable = this.reportService.getReports();
    this.reportsObservable.subscribe(data => {
      this.reports = data;
      this.dataSource = new MatTableDataSource(this.reports)
    });
  }

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.reportsObservable.subscribe(data => {
      this.reports = data;
      this.dataSource = new MatTableDataSource(this.reports)
    });
  }

  deleteReport(id: string) {
    this.reportService.deleteReport(id);
    this.dataSource = new MatTableDataSource(this.reports);
  }
}
