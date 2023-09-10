import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PageTitleService} from "../../../shared/services/page-title.service";
import {signOut} from "@angular/fire/auth";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {AuthService} from "../../../shared/services/auth.service";

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent {

  @Output() sidenavToggle = new EventEmitter<void>();

  constructor(public titleService: PageTitleService,private auth:AngularFireAuth,private snackBar:MatSnackBar, private router:Router, private authService:AuthService) {}
  get pageTitle(): string {
    return this.titleService.getTitle();
  }

  toggleSidenav() {
    this.sidenavToggle.emit();
  }

  logOut() {
    this.authService.signOut();
  }
}
