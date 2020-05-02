import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { IResults } from '../results.model';
import { results } from '../results';

@Component({
  selector: 'job-finder-recommendations-chart',
  templateUrl: './recommendations-chart.component.html',
  styleUrls: ['./recommendations-chart.component.scss']
})
export class RecommendationsChartComponent implements OnInit {

  jobRecommendations: IResults = results;
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    tooltips: {
      mode: 'index',
      callbacks: {
        label: function (tooltipItem, data) {

          return data.datasets[tooltipItem.datasetIndex].label + ': ' + tooltipItem.value + '%';
        }
      }
    }
  };

  public barChartLabels: Label[] = this.sortArr().map(v => v.job[0].toUpperCase() + v.job.substring(1))
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public colors = ['#38829E', '#ECA87E']
  public barChartData: ChartDataSets[] = [
    { data: this.sortArr().map(v => +v.score.toFixed(2)), label: 'Job Match Percentage', backgroundColor: '#38829E', hoverBackgroundColor: '#BF360C', barPercentage: 1 }
  ];

  constructor() { }
  ngOnInit() {

  }
  private sortArr(): { job: string, score: number }[] {
    return this.jobRecommendations.recommendedJobs.sort((a, b) => a.score < b.score ? 1 : -1)
  }
}
