import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { LadingCardsComponent } from './landing-cards/landing-cards.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { TitleComponent } from './title/title.component';
import { MenuComponent } from './menu/menu.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
    declarations: [
        LadingCardsComponent,
        TitleComponent,
        MenuComponent
    ],

    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        FlexLayoutModule,
        MatCardModule,
        MatListModule
    ],
    exports: [
        LadingCardsComponent,
        TitleComponent,
        MenuComponent
    ]
})
export class CoreModule {

}