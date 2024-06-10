/* eslint-disable react/prop-types */
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ bar }) => {
  const labels = bar.label;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Bar Chart",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Sales",
        data: bar.sales,
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "Revenue",
        data: bar.revenue,
        backgroundColor: "rgb(75, 192, 192)",
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

export default BarChart;
