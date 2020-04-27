import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { CoreModule } from '../core/core.module';
import { HomeRoutingModule } from './home.routing.module';
import { LadingCardsComponent } from './landing-cards/landing-cards.component';

@NgModule({
    declarations: [
        LadingCardsComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        MatCardModule,
        FlexLayoutModule,
        HomeRoutingModule
    ]
})
export class HomeModule {

}