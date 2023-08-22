import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
