import React from "react";
import styles from "./dashboardcard.module.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export default function DashboardCard() {
    
const options = {
    plugins: {
        legend: {
            display: false
        }
    },
    maintainAspectRatio: false,
    scales: {
        x: {
            grid: {
                display: false
            },
            ticks: {
                display: false
            },
            border: {
                display: false
            },
        },
        y: {
            grid: {
                display: false
            },
            ticks: {
                display: false
            },
            border: {
                display: false
            }
        }
    }
};
const labels = ['', '', '', '', '', '', ''];
const data = {
    labels,
    datasets: [
      {
        label: false,
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        categoryScale: 1.0,
        barScale: 0.8
      }
    ],
};

  return (
    <div className={`card ${styles.container}`}>
      <div className={`card-body`}>
        <h6 className={`card-title`}>Rooms Available</h6>
        <h4 className={`card-title`}>3200</h4>
        <div className={`${styles["info-container"]}`}>
          <div className={`${styles["info"]}`}>
            <p>THIS MONTH</p>
            <p>930</p>
          </div>
          <div className={`${styles["info"]}`}>
            <p>THIS WEEK</p>
            <p>240</p>
          </div>
          <div className={`${styles["info"]}`}>
            <Bar options={options} data={data} className={`${styles.bar}`}/>
          </div>
        </div>
      </div>
    </div>
  );
}
