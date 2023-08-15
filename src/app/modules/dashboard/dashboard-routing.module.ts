import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {DefaultComponent} from "./components/default/default.component";
import {DashboardContextComponent} from "./components/dashboard-context/dashboard-context.component";
import {LoanContextComponent} from "./components/loan-context/loan-context.component";
import {ExpensesContextComponent} from "./components/expenses-context/expenses-context.component";
import {BudgetContextComponent} from "./components/budget-context/budget-context.component";

const routes: Routes = [
    {
        path: '', component: DashboardComponent, children: [
            {path: '', redirectTo: '/dashboard/process', pathMatch: 'full'},
            {path: 'process', component: DashboardContextComponent},
            {path: 'home', component: DefaultComponent},
            {path: 'loan', component: LoanContextComponent},
            {path: 'expenses', component: ExpensesContextComponent},
            {path: 'budget', component: BudgetContextComponent}


        ]
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
}
