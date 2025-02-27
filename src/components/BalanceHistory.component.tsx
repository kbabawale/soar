import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip as ChartTooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js/auto";
import { BALANCEHISTORYDATA } from "../util/data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  ChartTooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        drawOnChartArea: true,
      },
      border: {
        dash: [2, 4],
      },
    },
    y: {
      grid: {
        drawOnChartArea: true,
      },
      border: {
        dash: [2, 4],
      },
      ticks: {
        stepSize: 100,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

const _data = BALANCEHISTORYDATA;

const BalanceHistory = () => {
  return <Line options={options} data={_data} />;
};

export default BalanceHistory;
