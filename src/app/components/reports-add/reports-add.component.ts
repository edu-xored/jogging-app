import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report/report.service';
import { Report } from '../../models/Report';

@Component({
  selector: 'app-reports-add',
  templateUrl: './reports-add.component.html',
  styleUrls: ['./reports-add.component.css']
})

export class ReportsAddComponent implements OnInit {

  startDate = new Date();
  constructor(public reportService: ReportService) { }

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
}
