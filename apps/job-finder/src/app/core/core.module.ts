import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuComponent } from './menu/menu.component';
import { TitleComponent } from './title/title.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        TitleComponent,
        MenuComponent
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        FlexLayoutModule,
        MatCardModule,
        MatListModule,
        RouterModule
    ],
    exports: [
        TitleComponent,
        MenuComponent
    ]
})
export class CoreModule {

}