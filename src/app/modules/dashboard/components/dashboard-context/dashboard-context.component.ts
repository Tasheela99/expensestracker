import {Component, OnInit, ViewChild} from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';
import {PageTitleService} from "../../../shared/services/page-title.service";



@Component({
  selector: 'app-dashboard-context',
  templateUrl: './dashboard-context.component.html',
  styleUrls: ['./dashboard-context.component.scss']
})
export class DashboardContextComponent implements OnInit{

  chartOptions: ApexOptions = {
    chart: {
      type: 'bar',
    },
    series: [
      {
        name: 'Sales',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
  };
  constructor(private titleService: PageTitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Dashboard');
  }



}
