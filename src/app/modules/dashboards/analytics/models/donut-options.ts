import { ApexChart, ApexLegend, ApexNonAxisChartSeries, ApexTheme, ApexTooltip } from "ng-apexcharts";

export type DonutOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: any;
  legend: ApexLegend;
  theme?: ApexTheme;
  tooltip: ApexTooltip;
};
