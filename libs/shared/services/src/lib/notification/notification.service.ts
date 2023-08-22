import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Notification, NotificationType } from './notification';

@Injectable()
export class NotificationService {
    private _idx = 0;
    private _subject = new Subject<Notification>();

    constructor() { }

    public getObservable(): Observable<Notification> {
        return this._subject.asObservable();
    }

    public info(message: string, timeout: number = 3000, title: string = '') {
        this._subject.next(
            new Notification(
                this._idx++,
                NotificationType.info,
                title,
                message,
                timeout
            )
        );
    }

    public success(message: string, timeout: number = 3000, title: string = '') {
        this._subject.next(
            new Notification(
                this._idx++,
                NotificationType.success,
                title,
                message,
                timeout
            )
        );
    }

    public warning(message: string, timeout: number = 3000, title: string = '') {
        this._subject.next(
            new Notification(
                this._idx++,
                NotificationType.warning,
                title,
                message,
                timeout
            )
        );
    }

    public error(message: string, timeout: number = 3000, title: string = '') {
        this._subject.next(
            new Notification(
                this._idx++,
                NotificationType.error,
                title,
                message,
                timeout
            )
        );
    }
}
