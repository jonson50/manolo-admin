import { DonutOptions } from "../models/donut-options";

export const donutOptions1: DonutOptions = {
  series: [78, 52],
  chart: {
    type: "donut",
    height: '100%',
    sparkline: {
      enabled: true
    },
  },
  labels: ["New", "Old"],
  legend: {
    show: false
  },
  theme: {
    monochrome: {
      enabled: true,
      color: '#5927a3'
    }
  },
  tooltip: {
    custom: ({series, seriesIndex, dataPointIndex, w}) => {
      return(
        '<div style="padding: 10px;">' +
        "<span>" +
        w.globals.labels[seriesIndex] +
        ": " +
        series[seriesIndex] + '%' +
        "</span>" +
        "</div>"
      );
    }
  }
}
