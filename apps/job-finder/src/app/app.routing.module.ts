import { Route } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ResultsPageComponent } from './results-page/results-page.component';
export const AppRoutes: Route[] = [
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'voc-test', loadChildren: () => import('./voc-test/voc-test.module').then(m => m.VocTestModule) },
    { path: 'results', component: ResultsPageComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: 'home' }
];