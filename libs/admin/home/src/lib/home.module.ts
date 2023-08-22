import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Route, RouterModule } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
        component: HomeComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes),],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
