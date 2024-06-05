import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

 
const WeeklyGoals = () => {
  const [chartData, setChartData] = useState({
    series: [30, 60],
    options: {
      chart: {
        type: 'donut',
        width: 400,
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: false,
              name: {
                show: false,
                fontSize: '14px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 600,
                color: undefined,
                offsetY: -10,
                formatter: function (val) {
                  return val;
                }
              },
              value: {
                show: false,
              },
              total: {
                show: false,
                label: 'Total',
                fontSize: '16px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 600,
                color: undefined,
                formatter: function (w) {
                  return w.globals.seriesTotals.reduce((a, b) => {
                    return a + b;
                  }, 0);
                }
              }
            }
          }
        }
      }
    }
  });
  const data = {
    labels: ['Deadlines Met', 'Deadlines Missed'],
    datasets: [
      {
        data: [73, 27],
        backgroundColor: ['#4CAF50', '#FF6384'],
        hoverBackgroundColor: ['#45A049', '#FF6384'],
      },
    ],
  };


  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="text-lg font-semibold">Weekly Goals</div>
      <div className="mt-4 flex flex-col items-center">
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="donut" />
      </div>
        <div className="w-32 h-32 bg-gray-200 rounded-full"></div>
        <div className="mt-4 flex items-center">
          <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-green-600 bg-green-200 mr-2">
            Deadlines met
          </span>
          <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-red-600 bg-red-200">
            Deadlines missed
          </span>

          {/* <Pie data={data} key={data} /> */}
        </div>
      </div>
    </div>
  );
};

export default WeeklyGoals;
