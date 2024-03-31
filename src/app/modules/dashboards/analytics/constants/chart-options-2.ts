import { SERIES } from "../data-1";
import { ChartOptions } from "../models/chart-options";

export const chartOptions2: Partial<ChartOptions> = {
  series: [
    {
      name: "Sales ABC",
      data: SERIES.monthDataSeries1.prices
    },
    {
      name: "Sales DEF",
      data: SERIES.monthDataSeries2.prices
    }
  ],
  chart: {
    type: "area",
    stacked: true,
    height: '100%',
    offsetY: 3,
    sparkline: {
      enabled: true
    },
  },
  stroke: {
    curve: "smooth"
  },
  //labels: SERIES.monthDataSeries1.dates,
  xaxis: {
    type: "datetime",
    axisBorder: {
      show: false
    },
    labels: {
      show: true,
      offsetY: -15,
    },
    tooltip: {
      enabled: false,
    }
  },
  yaxis: {
    show: false,

  },
  colors: ['#B0B0B0', '#CFD1D0']
};
