import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { ReportService } from '../../services/report/report.service';
import { Report } from '../../models/Report';

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
  
deleteReport(id: string) {
    this.reportService.deleteReport(id);
  }

const ELEMENT_DATA: Report[] = [
  {id: '0', timestamp: '11.03.2018', distance: 5000, time: '00:12:30', userId: '0'},
  {id: '1', timestamp: '11.04.2018', distance: 1000, time: '00:13:30', userId: '0'},
  {id: '2', timestamp: '11.05.2018', distance: 2500, time: '00:14:31', userId: '0'},
  {id: '3', timestamp: '11.06.2018', distance: 3000, time: '00:15:30', userId: '0'},
  {id: '4', timestamp: '11.08.2018', distance: 1200, time: '00:20:30', userId: '0'},
];
