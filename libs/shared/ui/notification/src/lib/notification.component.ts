import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService, Notification, NotificationType } from '@powa/shared/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'powa-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit, OnDestroy {
  notifications: Notification[] = [];
  private _subscription!: Subscription;

  constructor(
    private cdRef: ChangeDetectorRef,
    private _notificationSvc: NotificationService
  ) { }

  ngOnInit() {
    this._subscription = this._notificationSvc
      .getObservable()
      .subscribe((notification) => this._addNotification(notification));
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  private _addNotification(notification: Notification) {
    this.notifications.push(notification);

    if (notification.timeout !== 0) {
      setTimeout(() => this.close(notification), notification.timeout);
    }
  }

  public close(notification: Notification) {
    this.notifications = this.notifications.filter(
      (notif) => notif.id !== notification.id
    );
    this.cdRef.detectChanges();
  }

  public className(notification: Notification): string {
    let style: string;

    switch (notification.type) {
      case NotificationType.success:
        style = 'success';
        break;
      case NotificationType.warning:
        style = 'warning';
        break;
      case NotificationType.error:
        style = 'error';
        break;
      default:
        style = 'info';
        break;
    }

    return style;
  }
}
