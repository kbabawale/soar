import { PolarArea } from "react-chartjs-2";
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
import { EXPENSESDATA } from "../util/data";

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
    r: {
      pointLabels: {
        fontSize: 0,
        display: false,
        centerPointLabels: false,
      },
      beginAtZero: true,
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
};

const _data = EXPENSESDATA;

const ExpenseStatistics = () => {
  return <PolarArea data={_data} options={options} />;
};

export default ExpenseStatistics;
