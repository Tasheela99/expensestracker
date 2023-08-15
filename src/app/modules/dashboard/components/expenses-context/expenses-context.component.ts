import {Component, OnInit} from '@angular/core';
import {PageTitleService} from "../../../shared/services/page-title.service";

@Component({
  selector: 'app-expenses-context',
  templateUrl: './expenses-context.component.html',
  styleUrls: ['./expenses-context.component.scss']
})
export class ExpensesContextComponent implements OnInit{

  constructor(private titleService: PageTitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Expenses');
  }

}
