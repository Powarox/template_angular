import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { NotificationModule } from '@powa/shared/ui/notification';

@NgModule({
  imports: [CommonModule, RouterModule, NotificationModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
