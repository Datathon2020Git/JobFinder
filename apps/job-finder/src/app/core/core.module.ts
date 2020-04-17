import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { TitleComponent } from './title/title.component';

@NgModule({
    declarations: [
        MenuComponent,
        TitleComponent
    ],

    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        FlexLayoutModule,
        MatCardModule
    ],
    exports: [
        MenuComponent,
        TitleComponent
    ]
})
export class CoreModule {

}