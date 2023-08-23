import { Component } from '@angular/core';
import { NotificationService } from '@powa/shared/services';

@Component({
  selector: 'powa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  constructor(private notification: NotificationService) {
  }

  ngOnInit(): void {
  }

  public notif() {
    this.notification.success('Success Msg', 3000);
  }
}
