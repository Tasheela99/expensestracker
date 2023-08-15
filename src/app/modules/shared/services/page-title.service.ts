import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService implements OnInit{

  private pageTitle: string = '';

  getTitle(): string {
    return this.pageTitle;
  }

  setTitle(title: string): void {
    this.pageTitle = title;
  }
  constructor() { }

  ngOnInit(): void {
  }
}
