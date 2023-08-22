import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NotificationComponent } from './notification.component';

@NgModule({
  imports: [CommonModule, MatIconModule],
  declarations: [NotificationComponent],
  exports: [NotificationComponent],
})
export class NotificationModule { }
