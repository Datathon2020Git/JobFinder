import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { forecast } from './jobs_forecast';
import { escoFields } from './escoFields';

@Component({
  selector: 'job-finder-forecasts-chart',
  templateUrl: './forecasts-chart.component.html',
  styleUrls: ['./forecasts-chart.component.scss']
})
export class ForecastsChartComponent implements OnInit {
  public escoFields = escoFields
  public forecast = forecast;
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        }
      }],
    }
  };

  public barChartLabels: Label[] = this.escoFields.map(v => v.field);
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public colors = ['#38829E']
  public barChartData: ChartDataSets[] = [
    { data: this.escoFields.map(v => +v.job_openings_2030), label: 'Job Openings in Greece', backgroundColor: '#ECA87E' },
    { data: this.escoFields.map(v => +v.eu_mean), label: 'Eu Mean', backgroundColor: '#38829E' }
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
