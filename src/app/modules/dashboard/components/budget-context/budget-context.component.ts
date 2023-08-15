import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PageTitleService} from "../../../shared/services/page-title.service";

@Component({
  selector: 'app-budget-context',
  templateUrl: './budget-context.component.html',
  styleUrls: ['./budget-context.component.scss']
})
export class BudgetContextComponent implements OnInit{
  constructor(private titleService: PageTitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Budget');
  }


}
