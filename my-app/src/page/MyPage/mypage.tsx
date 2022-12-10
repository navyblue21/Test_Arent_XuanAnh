import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: false,
        },
    },
   
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data:[65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [15, 49, 90, 21, 77, 22, 66],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
    clip: false,
    backgroundColor: '#2E2E2E'
  };

  
const MyPage = () => {
    return (
        <section className="my-page">
            <div className="wrapper-achievement_rate">
                <div className="achievement_rate-left">
                    <div className="achievement_rate-img">

                        <div className="achievement_rate-circle">
                        </div>
                        <div className="achievement_rate-number">
                            <span className="achievement_rate-number-date">05/21</span>
                            <span className="achievement_rate-number-percent">75%</span>
                        </div>
                    </div>
                </div>
                <div className="achievement_rate-right">
                    {/* <Line options={options} data={data} /> */}
                </div>
            </div>

        </section>
    )
};

export default MyPage