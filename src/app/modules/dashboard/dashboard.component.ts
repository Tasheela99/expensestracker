import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {PageTitleService} from "../shared/services/page-title.service";
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private titleService: PageTitleService) {}

  toggleSidenav() {
    this.sidenav.toggle();
  }
  ngOnInit(): void {
  }

}
