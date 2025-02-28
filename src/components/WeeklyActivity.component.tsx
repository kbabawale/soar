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
import { useWeeklyActivityStore } from "../store/weeklyActivity.store";
import Skeleton from "react-loading-skeleton";
import { useEffect } from "react";

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
        drawOnChartArea: true,
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
      text: "Chart.js Bar Chart",
    },
  },
};

const WeeklyActivity = () => {
  const fetchFn = useWeeklyActivityStore((state) => state.fetchActivity);
  const activity = useWeeklyActivityStore((state) => state.data);
  const loading = useWeeklyActivityStore((state) => state.loading);

  const _data = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Withdraw",
        data: activity?.withdrawal,
        borderColor: "#232323",
        fill: true,
        borderRadius: 15,
        barPercentage: 0.5,
        backgroundColor: "#232323",
        tension: 0.5,
      },
      {
        label: "Deposit",
        data: activity?.deposits,
        fill: true,
        borderRadius: 15,
        barPercentage: 0.5,
        borderColor: "#396AFF",
        backgroundColor: "#396AFF",
        tension: 0.5,
      },
    ],
  };

  useEffect(() => {
    if (!activity?.deposits || !activity?.withdrawal) fetchFn?.();
  }, []);

  return (
    <div className="bg-white w-full h-[350px] flex flex-col p-6 rounded-3xl">
      <div className="flex items-center justify-end space-x-2">
        <div className="w-[15px] h-[15px] rounded-full bg-c-blue"></div>
        <span className="text-c-alt text-sm">Deposit</span>
        <div className="w-[15px] h-[15px] rounded-full bg-c-primary"></div>
        <span className="text-c-alt text-sm">Withdraw</span>
      </div>

      {loading && (
        <Skeleton containerClassName="flex-1" style={{ height: "300px" }} />
      )}
      {!loading && activity?.deposits && activity.withdrawal && (
        <Bar options={options} data={_data} />
      )}
    </div>
  );
};

export default WeeklyActivity;
