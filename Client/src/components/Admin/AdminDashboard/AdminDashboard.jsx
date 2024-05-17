import React from "react";
import styles from "./admindashboard.module.css";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import DashboardCard from "./DashboardCard/DashboardCard";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

import adminContext from "../../../store/adminContext/adminContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function AdminDashboard() {
  const adminDetails = useContext(adminContext);
  const navigate = useNavigate();
  const [showUserDetails, setShowUserDetails] = useState(false);

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  };
  const labels = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: false,
        data: [
          65, 59, 80, 81, 56, 55, 40, 34, 54, 65, 65, 59, 80, 81, 56, 55, 40,
          34, 54, 65, 65, 59, 80, 81, 56, 55, 40, 34, 54, 65, 65, 59, 80, 81,
          56, 55, 40, 34, 54, 65,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        categoryScale: 1.0,
        barScale: 0.8,
      },
    ],
  };

  const dataDoughnut = {
    labels: ["", "", "", ""],
    datasets: [
      {
        label: "# of Votes",
        data: [65, 15, 10, 5],
        backgroundColor: ["#798bff", "#1ee0ac", "#f9db7b", "#ffa353"],
      },
    ],
  };

  const optionsDoughnut = {
    cutout: 60,
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div className={`${styles["dashboard-container"]}`}>
      <div className={`${styles["sidebar-container"]}`}>
        <AdminNavbar className={`${styles.nav}`} />
      </div>
      {showUserDetails && (
        <div className={`${styles.userDetails}`}>
          <div className={`${styles.flex}`}>
            <h6>Name: </h6>
            <h6>{adminDetails.firstName} {adminDetails.lastName}</h6>
          </div>
          <div className={`${styles.flex}`}>
            <h6>Email: </h6>
            <h6>{adminDetails.email}</h6>
          </div>
          <div className={`${styles.flex}`}>
            {/* <h6>Contact: </h6>
              <h6>03430810984</h6> */}
          </div>
          <button style={{ padding: "10px" }} className="btn btn-danger" onClick={() => {
            navigate('/');
          }}>Logout</button>
        </div>
      )}
      <div className={`${styles["admin-info"]}`}>
        <ul>
          <li>{adminDetails.firstName} {adminDetails.lastName}</li>
          {/* <li>Do you know the latest update of 2022?</li> */}
          <ul>
            <div className={`${styles.profile}`}>
              {/* <button className="btn btn-success me-2">Login</button> */}
              <a type="button" onClick={() => { setShowUserDetails(!showUserDetails) }}>
                <BsFillPersonFill className="display-6" />
              </a>
            </div>
          </ul>
        </ul>
      </div>

      <div className={`${styles["dashboard-heading"]}`}>
        <h1>Admin Dashboard</h1>
        <p>Welcome to Tripify Admin Dashboard</p>
      </div>

      <div className={`${styles["cards-container"]}`}>
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
      </div>

      <div className={`${styles["section-container"]}`}>
        <div className={`card ${styles["sales-container"]}`}>
          <div className={`card-body`}>
            <h6 className={`card-title`}>Sales Revenue</h6>
            <p className={`card-title`}>In last 30 days revenue from rent</p>
            <div className={`${styles["infor-container"]}`}>
              <div className={`${styles["infor"]}`}>
                <p>Monthly</p>
                <p>930</p>
              </div>
              <div className={`${styles["infor"]}`}>
                <p>Weekly</p>
                <p>240</p>
              </div>
              <div className={`${styles["infor"]}`}>
                <p>Daily</p>
                <p>240</p>
              </div>
            </div>
            <div className={`${styles["chart-container"]}`}>
              <Bar
                options={options}
                data={data}
                className={`${styles["bar-chart"]}`}
              />
            </div>
          </div>
        </div>

        <div className={`card ${styles["sales-container"]}`}>
          <div className={`card-body`}>
            <h6 className={`card-title`}>Room Booking Chart</h6>
            <div className={`${styles["round-chart-container"]}`}>
              <Doughnut
                options={optionsDoughnut}
                data={dataDoughnut}
                className={`${styles.doughnut}`}
              />
            </div>
            <div className={`${styles.roundData}`}>
              <div>
                <div>
                  <span className={`${styles.cube}`}></span>
                  <span>Single</span>
                </div>
                <div>
                  1913
                  <small>60%</small>
                </div>
              </div>
              <div>
                <div>
                  <span className={`${styles.cube}`}></span>
                  <span>Single</span>
                </div>
                <div>
                  1913
                  <small>60%</small>
                </div>
              </div>
              <div>
                <div>
                  <span className={`${styles.cube}`}></span>
                  <span>Single</span>
                </div>
                <div>
                  1913
                  <small>60%</small>
                </div>
              </div>
              <div>
                <div>
                  <span className={`${styles.cube}`}></span>
                  <span>Single</span>
                </div>
                <div>
                  1913
                  <small>60%</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.cardList}`}>
        <div className={`card`}>
          <div className={`card-header ${styles.listHeader}`}>
            <span>New Customer</span>
            <span>View All</span>
          </div>
          <ul className={`list-group list-group-flush ${styles.list}`}>
            <li className="list-group-item">
              <span>MA</span>

              <span>
                <div>Mohsin Sheikh</div>
                <div>sheikhmohsin181@gmail.com</div>
              </span>
            </li>
            <li className="list-group-item">
              <span>MA</span>

              <span>
                <div>Mohsin Sheikh</div>
                <div>sheikhmohsin181@gmail.com</div>
              </span>
            </li>
            <li className="list-group-item">
              <span>MA</span>

              <span>
                <div>Mohsin Sheikh</div>
                <div>sheikhmohsin181@gmail.com</div>
              </span>
            </li>
            <li className="list-group-item">
              <span>MA</span>

              <span>
                <div>Mohsin Sheikh</div>
                <div>sheikhmohsin181@gmail.com</div>
              </span>
            </li>
            <li className="list-group-item">
              <span>MA</span>

              <span>
                <div>Mohsin Sheikh</div>
                <div>sheikhmohsin181@gmail.com</div>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
