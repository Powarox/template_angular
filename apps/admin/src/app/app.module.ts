import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NotificationService } from '@powa/shared/services';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('@powa/admin/shell').then((m) => m.ShellModule),
        },
      ],
    ),

  ],
  providers: [NotificationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
