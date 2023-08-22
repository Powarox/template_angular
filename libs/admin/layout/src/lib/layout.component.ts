import { Component, OnInit } from '@angular/core';
import { NotificationService } from '@powa/shared/services';

@Component({
  selector: 'powa-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(private notification: NotificationService) {

  }

  ngOnInit(): void {
    this.notification.error('Error Msg', 3000);
    this.notification.success('Success Msg', 3000);
  }
}
