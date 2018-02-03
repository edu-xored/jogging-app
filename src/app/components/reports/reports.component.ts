import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  displayedColumns = ['Date', 'Distance', 'Time'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}

export interface Element {
  date: string;
  distance: number;
  time: string;
}

const ELEMENT_DATA: Element[] = [
  {date: '11.03.2018', distance: 5000, time: '00:12:30'},
  {date: '11.04.2018', distance: 1000, time: '00:13:30'},
  {date: '11.05.2018', distance: 2500, time: '00:14:31'},
  {date: '11.06.2018', distance: 3000, time: '00:15:30'},
  {date: '11.08.2018', distance: 1200, time: '00:20:30'},
];
