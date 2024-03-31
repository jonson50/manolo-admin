import { Component, ViewChild } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import {
  NgApexchartsModule,
  ChartComponent,
} from "ng-apexcharts";
import { chartOptions1 } from './constants/chart-options-1';
import { chartOptions2 } from './constants/chart-options-2';
import { chartOptions3 } from './constants/chart-options-3';
import { DonutOptions } from './models/donut-options';
import { donutOptions1 } from './constants/donut-options-1';

export type YRange = { min: number; max: number };

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [
    MatMenuModule,
    MatRippleModule,
    NgApexchartsModule
  ],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss'
})
export class AnalyticsComponent {
  @ViewChild('chart')
  chart!: ChartComponent;

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
        name: "STOCK",
        data: this.generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 5, { min: 10, max: 60 })
      }
    ],
    colors: ['#D43172'],
  };

  public chartOptions4 = {
    ...chartOptions3,
    series: [
      {
        name: "STOCK",
        data: this.generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 10, { min: 10, max: 60 })
      }
    ],
    colors: ['#525BE3']
  };

  public chartOptions5 = {
    ...chartOptions3,
    series: [
      {
        name: "STOCK",
        data: this.generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 10, { min: 10, max: 60 })
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

  constructor() {
    //this.chartOptions
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
