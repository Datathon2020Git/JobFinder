import { NgModule } from "@angular/core";
import { Route, RouterModule } from '@angular/router';
import { ResultsPageComponent } from './results-page.component';
const resultsRoutes: Route[] = [
    { path: '', component: ResultsPageComponent }
]
@NgModule({
    imports: [
        RouterModule.forChild(resultsRoutes)
    ],
    exports: [RouterModule]
})
export class ResultsRoutingModule {

}