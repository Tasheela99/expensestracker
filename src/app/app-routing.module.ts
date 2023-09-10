import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {AuthGuard} from "./modules/shared/guards/auth.guard";



const routes: Routes = [
  {path: '', redirectTo: 'security/login', pathMatch: "full"},
  {path: 'security', loadChildren: () => import('./modules/security/security.module').then(m => m.SecurityModule)},
  {path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate:[AuthGuard]
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
