import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { results } from '../results';
import { IJob } from '../results.model';
@Component({
  selector: 'job-finder-ratings-chart',
  templateUrl: './ratings-chart.component.html',
  styleUrls: ['./ratings-chart.component.scss']
})
export class RatingsChartComponent implements OnInit {
  public ratings: IJob[] = results.ratings;
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales:{
      yAxes: [{
        ticks: {
          beginAtZero: true,
          stepSize:1
        }
      }]
    }
  };

  public barChartLabels: Label[] = this.sortArr().map(v => v.job[0].toUpperCase() + v.job.substring(1))
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public colors = ['#38829E']
  public barChartData: ChartDataSets[] = [
    { data: this.sortArr().map(v => +v.score.toFixed(2)), label: 'Rating' ,backgroundColor:'#ECA87E' }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  private sortArr(): { job: string, score: number }[] {
    return this.ratings.sort((a, b) => a.score < b.score ? 1 : -1)
  }
}
