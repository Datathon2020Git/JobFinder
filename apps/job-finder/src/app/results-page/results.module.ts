import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { ChartsModule } from 'ng2-charts';
import { RecommendationsChartComponent } from './recommendations-chart/recommendations-chart.component';
import { ResultsPageComponent } from './results-page.component';
import { ResultsRoutingModule } from './results.routing.module';
import { RatingsChartComponent } from './ratings-chart/ratings-chart.component';
import { ForecastsChartComponent } from './forecasts-chart/forecasts-chart.component';

@NgModule({
    declarations: [
        ResultsPageComponent,
        RecommendationsChartComponent,
        RatingsChartComponent,
        ForecastsChartComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        ChartsModule,
        FlexLayoutModule,
        ResultsRoutingModule
    ]
})
export class ResultsModule {

}