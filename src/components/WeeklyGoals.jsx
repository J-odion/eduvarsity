import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

 
const WeeklyGoals = () => {
  const [chartData, setChartData] = useState({
    series: [35, 65],
    options: {
      chart: {
        type: 'donut',
        width: 700,
      },
      legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        offsetX: 0,
        offsetY: 0,
        markers: {
          width: 14,
          height: 14,
          radius: 0
        },
        itemMargin: {
          horizontal: 10,
          vertical: 5
        }
        },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: false,
              total: {
                showAlways: true,
                show: true,
              }
            }
          }
        }
      },
      labels: ['Deadlines Met', 'Deadlines Missed'],
      dataLabels: {
        enabled: false
      },
      fill: {
        colors: ['#FFBA87', "#7F9B4F"]
      },
      colors: ["#7F9B4F", '#FFBA87'],

    }
  });
  // const data = {
  //   labels: ['Deadlines Met', 'Deadlines Missed'],
  //   datasets: [
  //     {
  //       data: [73, 27],
  //       backgroundColor: ['#4CAF50', '#FF6384'],
  //       hoverBackgroundColor: ['#45A049', '#FF6384'],
  //     },
  //   ],
  // };


  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="text-lg font-semibold">Weekly Goals</div>
      <div className="mt-4 flex flex-col items-center">
      <div id="chart w-full">
        <ReactApexChart options={chartData.options} series={chartData.series} type="donut" />
      </div>
        {/* <div className="w-32 h-32 bg-gray-200 rounded-full"></div> */}
        {/* <div className="mt-4 flex items-center">
          <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-green-600 bg-green-200 mr-2">
            Deadlines met
          </span>
          <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-red-600 bg-red-200">
            Deadlines missed
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default WeeklyGoals;
