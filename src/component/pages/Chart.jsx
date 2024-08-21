import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const doughnutData = {
  labels: ["Failed", "Warning", "Not available", "Gray"],
  datasets: [
    {
      data: [1689, 681, 36, 7253],
      backgroundColor: ["red", "yellow", "gray", "#3CB371"],
      borderColor: ["white", "white", "white", "white"],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
      labels: {
        boxWidth: 10,
        padding: 4,
      },
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
      },
    },
  },
  layout: {
    padding: {
      left: 5,
      right: 5,
      top: 5,
      bottom: 5,
    },
  },
  elements: {
    arc: {
      borderWidth: 1,
    },
  },
  cutout: "75%", // Hollow center size of the doughnut chart
};

const DoughnutChart = () => {
  return (
    <div className="relative mx-auto w-[180px] h-[180px]">
      <Doughnut data={doughnutData} options={options} />
      <p className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-sm">
        <p className="text-center items-center p-0">9659</p>
        <p> Total</p>
      </p>
    </div>
  );
};

export default DoughnutChart;
