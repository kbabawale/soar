import { Bar } from "react-chartjs-2";
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
import { WEEKLYACTIVITYDATA } from "../util/data";

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
        drawOnChartArea: false,
      },
    },
    y: {
      grid: {
        drawOnChartArea: false,
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

const _data = WEEKLYACTIVITYDATA;

const WeeklyActivity = () => {
  return (
    <div className="bg-white w-full h-[350px] flex flex-col p-6 rounded-3xl">
      <div className="flex items-center justify-end space-x-2">
        <div className="w-[15px] h-[15px] rounded-full bg-c-blue"></div>
        <span className="text-c-alt text-sm">Deposit</span>
        <div className="w-[15px] h-[15px] rounded-full bg-c-primary"></div>
        <span className="text-c-alt text-sm">Withdraw</span>
      </div>

      <Bar options={options} data={_data} />
    </div>
  );
};

export default WeeklyActivity;
