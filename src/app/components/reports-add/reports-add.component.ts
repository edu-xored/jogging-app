import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report/report.service';
import { Report } from '../../models/Report';
import {Location} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports-add',
  templateUrl: './reports-add.component.html',
  styleUrls: ['./reports-add.component.css']
})

export class ReportsAddComponent implements OnInit {
  time: string;
  timestamp: string;
  distance: number;
  startDate = new Date();
  constructor(public reportService: ReportService, private _location: Location, private router: Router) { }

  ngOnInit() {
  }

  addReport(distance: number, time: string, timestamp: Date) {
    const report: Report = {
      timestamp: timestamp.toDateString(),
      distance: distance,
      time: time
    };
    this.reportService.addReport(report);
    this.router.navigate(['/reports']);
  }

  goBack() {
    this.router.navigate(['/reports']);
  }
}