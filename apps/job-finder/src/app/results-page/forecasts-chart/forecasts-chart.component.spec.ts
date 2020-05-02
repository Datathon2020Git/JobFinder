import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastsChartComponent } from './forecasts-chart.component';

describe('ForecastsChartComponent', () => {
  let component: ForecastsChartComponent;
  let fixture: ComponentFixture<ForecastsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
