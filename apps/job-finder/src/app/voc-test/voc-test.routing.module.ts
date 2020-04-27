import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { VocTestComponent } from './voc-test.component';

const vocTestRoutes: Route[] = [
    { path: '', component: VocTestComponent }
]
@NgModule({
    imports: [
        RouterModule.forChild(vocTestRoutes)
    ],
    exports: [RouterModule]
})
export class VocTestRoutingModule {

}