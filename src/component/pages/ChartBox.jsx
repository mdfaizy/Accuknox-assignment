import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

// Updated data
const doughnutData = {
  labels: ["Connected","Not Connected"],
  datasets: [
    {
      
      data: [2, 2],
      backgroundColor: ["#F5F5F5", "#3CB371"],
      borderColor: ["white", "white", "white", "white"],
      borderWidth: 1,
    },
  ],
};
// Updated options for layout and alignment
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right", // Position legend to the right
      labels: {
        boxWidth: 10, // Size of the color box
        padding: 4, // Padding between legend items
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
      right:5,
      top: 5,
      bottom: 5,
    },
  },
  elements: {
    arc: {
      borderWidth: 1, // Adjust border width for segments
    },
  },
  cutout: "75%", // Adjust this value to make the segments narrower or wider
};

const DoughnutChart = () => {
  return (
    // <div  className="mx-auto w-[180px] h-[180px]">
    //   {/* <Doughnut data={doughnutData} options={options} /> */}
    //   <div className="relative">
    //   <Doughnut data={doughnutData} options={options} />
    //   <p className="absolute text-lg font-bold flex scroll-px-5">Total</p>
    //   </div>
    // </div>


    <div className="relative mx-auto w-[180px] h-[180px]">
      <Doughnut data={doughnutData} options={options} />
      <p className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-sm">
       <p className="text-center items-center p-0">2</p>
       <p> Total</p>
      </p>
    </div>

  );
};

export default DoughnutChart;








