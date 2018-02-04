import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report/report.service';
import { Report } from '../../models/Report';
import {Location} from '@angular/common';

@Component({
  selector: 'app-reports-add',
  templateUrl: './reports-add.component.html',
  styleUrls: ['./reports-add.component.css']
})

export class ReportsAddComponent implements OnInit {

  startDate = new Date();
  constructor(public reportService: ReportService, private _location: Location) { }

  ngOnInit() {
  }

  addReport(distance: number, time: string, timestamp: string) {
    const report: Report = {
      timestamp: timestamp,
      distance: distance,
      time: time
    };
    this.reportService.addReport(report);
  }

  goBack() {
    this._location.back();
  }
}
