import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PageTitleService} from "../../../shared/services/page-title.service";

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent {

  @Output() sidenavToggle = new EventEmitter<void>();

  constructor(public titleService: PageTitleService) {}
  get pageTitle(): string {
    return this.titleService.getTitle();
  }

  toggleSidenav() {
    this.sidenavToggle.emit();
  }
}
