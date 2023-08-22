import { Route } from '@angular/router';
import { LayoutComponent } from '@powa/admin/layout';

export const routes: Route[] = [
	{
		path: 'error',
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: '404',
			},
		],
	},
	{
		path: '',
		// canActivate: [AuthGuard],
		component: LayoutComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'home',
			},
			{
				path: 'home',
				pathMatch: 'full',
				loadChildren: async () =>
					(await import('@powa/admin/home')).HomeModule,
			},
			{
				path: '**',
				pathMatch: 'full',
				redirectTo: 'home',
			},
		],
	},
];
