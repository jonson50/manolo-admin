import { SERIES } from "../data-1";
import { ChartOptions } from "../models/chart-options";

export const chartOptions1: Partial<ChartOptions> = {
  series: [
    {
      name: "STOCK ABC",
      data: SERIES.monthDataSeries1.prices
    }
  ],
  grid: {
    show: true,
    borderColor: '#88898A',
    xaxis: {
      lines: {
        show: true
      },

    },
    yaxis: {
      lines: {
        show: true
      }
    },
  },
  chart: {
    type: "area",
    height: '100%',
    sparkline: {
      enabled: true
    },
    offsetY: 3,
  },
  stroke: {
    curve: "straight"
  },
  labels: SERIES.monthDataSeries1.dates,
  xaxis: {
    type: "datetime",
    labels: {
      show: true,
      offsetY: -15,
    },
  },
};
