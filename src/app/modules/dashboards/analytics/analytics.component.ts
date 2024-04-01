import { Component, DestroyRef, ViewChild, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import {
  NgApexchartsModule,
  ChartComponent,
} from "ng-apexcharts";
import { chartOptions1 } from './constants/chart-options-1';
import { chartOptions2 } from './constants/chart-options-2';
import { chartOptions3 } from './constants/chart-options-3';
import { DonutOptions } from './models/donut-options';
import { donutOptions1 } from './constants/donut-options-1';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SERIES } from './data-1';

export type YRange = { min: number; max: number };

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [
    MatMenuModule,
    MatRippleModule,
    NgApexchartsModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss'
})
export class AnalyticsComponent {
  private readonly destroyRef = inject(DestroyRef)

  @ViewChild('chart')
  chart!: ChartComponent;

  clientView = new FormControl('thisMonth');

  public chartOptions1 = { ...chartOptions1 };

  public chartOptions2 = {
    ...chartOptions2,
    series: [
      {
        name: "South",
        data: this.generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 20, { min: 10, max: 60 })
      },
      {
        name: "North",
        data: this.generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 20, { min: 10, max: 20 })
      },
    ]
  };

  public chartOptions3 = {
    ...chartOptions3,
    series: [
      {
        name: "Visits",
        data: this.generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 5, { min: 10, max: 60 })
      }
    ],
    colors: ['#D43172'],
  };

  public chartOptions4 = {
    ...chartOptions3,
    series: [
      {
        name: "Requests",
        data: this.generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 4, { min: 10, max: 60 })
      }
    ],
    colors: ['#525BE3']
  };

  public chartOptions5 = {
    ...chartOptions3,
    series: [
      {
        name: "Dispatches",
        data: this.generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 4, { min: 10, max: 60 })
      }
    ],
    colors: ['#52E3A2']
  };

  public donut1: DonutOptions = {
    ...donutOptions1
  }

  public donut2: DonutOptions = {
    ...donutOptions1,
    series: [25, 75],
    labels: ["Male", "Female"],
    theme: {
      monochrome: {
        enabled: true,
        color: '#A32754'
      }
    },
  };

  public donut3: DonutOptions = {
    ...donutOptions1,
    series: [45, 55],
    labels: ["Under 40", "Over 40"],
    theme: {
      monochrome: {
        enabled: true,
        color: '#0A9142'
      }
    },
  };

  public donut4: DonutOptions = {
    ...donutOptions1,
    series: [23, 77],
    labels: ["German", "English"],
    theme: {
      monochrome: {
        enabled: true,
        color: '#91570A'
      }
    },
  };

  ngOnInit() {
    this.clientView.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(value => {
      if (value == 'lastSemester') {
        this.chartOptions1.series = [
          {
            name: "STOCK ABC",
            data: SERIES.monthDataSeries3.prices
          }
        ];
        this.chartOptions1.labels = SERIES.monthDataSeries3.dates;
      } else {
        this.chartOptions1.series = [
          {
            name: "STOCK ABC",
            data: SERIES.monthDataSeries1.prices
          }
        ];
        this.chartOptions1.labels = SERIES.monthDataSeries1.dates;
      }
    })
  }

  public generateDayWiseTimeSeries(baseval: number, count: number, yrange: YRange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = baseval;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([x, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  };
}
