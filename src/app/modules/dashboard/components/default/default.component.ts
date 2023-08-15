import {Component, OnInit} from '@angular/core';
import {PageTitleService} from "../../../shared/services/page-title.service";

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit{

  constructor(private titleService: PageTitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Home');
  }

}
