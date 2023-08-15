import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardContextComponent } from './components/dashboard-context/dashboard-context.component';
import { LoanContextComponent } from './components/loan-context/loan-context.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { BudgetContextComponent } from './components/budget-context/budget-context.component';
import { DefaultComponent } from './components/default/default.component';
import { ExpensesContextComponent } from './components/expenses-context/expenses-context.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {NgApexchartsModule} from "ng-apexcharts";
import {MatMenuModule} from "@angular/material/menu";


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardContextComponent,
    LoanContextComponent,
    DashboardHeaderComponent,
    BudgetContextComponent,
    DefaultComponent,
    ExpensesContextComponent
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        NgApexchartsModule,
        MatMenuModule
    ]
})
export class DashboardModule { }
