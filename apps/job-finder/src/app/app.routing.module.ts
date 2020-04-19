import { Route } from '@angular/router';
import { AboutComponent } from './about/about.component';
export const AppRoutes: Route[] = [
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: 'home' }
];