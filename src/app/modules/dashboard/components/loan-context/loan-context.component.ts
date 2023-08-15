import {Component, OnInit} from '@angular/core';
import {PageTitleService} from "../../../shared/services/page-title.service";

@Component({
  selector: 'app-loan-context',
  templateUrl: './loan-context.component.html',
  styleUrls: ['./loan-context.component.scss']
})
export class LoanContextComponent implements OnInit{

  constructor(private titleService: PageTitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Loan');
  }

}
