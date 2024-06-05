import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';


const OverallSummary = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Net Profit',
        data: ['7', '7','7', '7','7', '7','7'  ]
      },
      {
        name: 'Revenue',
        data: ['5', '5', '3','2','3','6','6' ]
      }
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '35%',
          endingShape: 'rounded'
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        },
        labels: {
          formatter: function(val) {
            return val + 'hrs';
          }
        },
        tickAmount: 5 // Adjust the number of ticks on the y-axis
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return '$ ' + val + ' thousands';
          }
        }
      },
      colors: ['#9DC4FF', '#CC9225']
    }
  });
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <div className="flex px-2 justify-between">
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col">
        <div className="text-lg font-semibold">Overall Summary</div>
        <div className="text-gray-600 mb-4 w-[60%]">Hi Thanau, you are behind schedule. You are running late. You need to step it up so you can meet your weekly goals.</div>
        </div>
        <div>
          <select className="border rounded p-2">
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
        </div>
      </div>
      
      
      </div>
      {/* <div className="flex justify-between items-end"> */}
        {/* Placeholder for the bar chart */}
        <div className="w-[80%] hidden lg:block">
        <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
      {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default OverallSummary;
