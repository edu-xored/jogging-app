import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report/report.service';
import { Report } from '../../models/Report';

@Component({
  selector: 'app-reports-add',
  templateUrl: './reports-add.component.html',
  styleUrls: ['./reports-add.component.css']
})
export class ReportsAddComponent implements OnInit {

  readonly report: Report = {
    timestamp: '',
    distance: 0,
    time: ''
  };

  startDate = new Date();
  constructor(public reportService: ReportService) { }

  ngOnInit() {
  }

  addReport() {
    this.reportService.addReport(this.report);
    // const report = new Report({time =})
    // this.reportService.addReport(new Report({distance}))
  }
}
