import { NgModule } from "@angular/core";
import { LadingCardsComponent } from './landing-cards/landing-cards.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { homeRoutes } from './home.routing.module';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        LadingCardsComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        FlexLayoutModule,
        RouterModule.forChild(homeRoutes)
    ]
})
export class HomeModule {

}