import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ui1Component } from './shared/ui1/ui1.component';
import { D3Component } from './shared/d3/d3.component';

const routes: Routes = [
  { path: '', redirectTo: 'ionic', pathMatch: 'full' },
  { path: 'ionic', component: Ui1Component},
  { path: 'd3', component: D3Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
  {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
