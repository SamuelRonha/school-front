import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {HomeComponent} from "./components/home/home.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'panel', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'panel', redirectTo: 'pages/dashboard' }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
