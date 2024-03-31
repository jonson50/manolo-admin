import { SERIES } from "../data-1";
import { ChartOptions } from "../models/chart-options";

export const chartOptions3: Partial<ChartOptions> = {
  series: [
    {
      name: "STOCK ABC",
      data: SERIES.monthDataSeries1.prices
    }
  ],
  chart: {
    type: 'area',
    offsetY: 3,
    height: '100%',
    sparkline: {
      enabled: true
    },
  },
  stroke: {
    curve: "smooth"
  },
  fill: {
    opacity: 0.3,
  },
  yaxis: {
    min: 0
  },
};
