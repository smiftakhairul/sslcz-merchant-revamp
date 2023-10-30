import "chartjs-plugin-streaming";
import { ThemeColors } from '../helpers/theme-colors'
const colors = ThemeColors()

export const liveChartData = {
  datasets: [
    {
      label: "",
      borderColor: colors.themeColor1,
      backgroundColor: colors.themeColor1_10,
      // lineTension: 0,
      // borderDash: [8, 4],
      data: []
    }
  ]
};

export const liveChartData2 = {
  datasets: [
    {
      label: "",
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.10)',
      // lineTension: 0,
      // borderDash: [8, 4],
      data: []
    }
  ]
};
