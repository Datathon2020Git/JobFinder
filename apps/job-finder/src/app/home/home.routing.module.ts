import { Route, RouterModule } from '@angular/router';
import { LadingCardsComponent } from './landing-cards/landing-cards.component';
import { NgModule } from '@angular/core';

export const homeRoutes: Route[] = [
    { path: '', component: LadingCardsComponent }
]
@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [RouterModule]
})
export class HomeRoutingModule {
    
}