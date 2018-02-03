import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { ReportService } from '../../services/report/report.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  displayedColumns = ['Date', 'Distance', 'Time', 'Delete'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(public reportService: ReportService) { }

  @ViewChild(MatSort) sort: MatSort;

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  deleteReport(id: number) {
    console.log(id);
    // this.reportService.deleteReport(id);
  }
}

export interface Element {
  id: number;
  date: string;
  distance: number;
  time: string;
}

const ELEMENT_DATA: Element[] = [
  {id: 0, date: '11.03.2018', distance: 5000, time: '00:12:30'},
  {id: 1, date: '11.04.2018', distance: 1000, time: '00:13:30'},
  {id: 2, date: '11.05.2018', distance: 2500, time: '00:14:31'},
  {id: 3, date: '11.06.2018', distance: 3000, time: '00:15:30'},
  {id: 4, date: '11.08.2018', distance: 1200, time: '00:20:30'},
];
