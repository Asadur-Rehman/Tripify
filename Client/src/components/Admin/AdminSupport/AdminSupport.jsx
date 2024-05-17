import { React, useState, useEffect } from "react";
import styles from "./adminsupport.module.css";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import Message from "./Message/Message";
import axios from "axios";

export default function AdminSupport() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/getAllComplaints').then((response) => {
      // console.log(response.data.result);
      if (response.data.status) {
        setComplaints(response.data.result);
      }
    })
  }, [])

  // const users = [{
  //   name: "Mohsin Sheikh",
  //   initials: "MS",
  //   email: "sheikhmohsin181@gmail.com",
  //   subject: "Error while booking a hotel",
  //   message: `I don\'t know what is happenning... I am
  //           trying very very hard to book a hotel at your 
  //           website but it is sending me an error that 'Cannot
  //           book hotel at this time! Contact Admin'. Can you please
  //           resolve this error`,
  // },
  // {
  //   name: "Mohsin Sheikh",
  //   initials: "MS",
  //   email: "sheikhmohsin181@gmail.com",
  //   subject: "Error while booking a hotel",
  //   message: `I don\'t know what is happenning... I am
  //           trying very very hard to book a hotel at your 
  //           website but it is sending me an error that 'Cannot
  //           book hotel at this time! Contact Admin'. Can you please
  //           resolve this error`,
  // },
  // {
  //   name: "Mohsin Sheikh",
  //   initials: "MS",
  //   email: "sheikhmohsin181@gmail.com",
  //   subject: "Error while booking a hotel",
  //   message: `I don\'t know what is happenning... I am
  //           trying very very hard to book a hotel at your 
  //           website but it is sending me an error that 'Cannot
  //           book hotel at this time! Contact Admin'. Can you please
  //           resolve this error`,
  // },];
  const markAsResolved = async (event) => {
    axios.post(`http://localhost:8000/resolveComplaint/${event.target.name}`).then((response) => {
      if(response.data.status) {
        console.log('resolved');
        axios.get('http://localhost:8000/getAllComplaints').then((response) => {
          // console.log(response.data.result);
          if (response.data.status) {
            setComplaints(response.data.result);
          }
        })
      }
    })
  }

  return (
    <div className={`${styles["support-container"]}`}>
      <div className={`${styles["sidebar-container"]}`}>
        <AdminNavbar className={`${styles.nav}`} />
      </div>

      <div className={`${styles.customerHeading}`}>
        <h1>Customer's Support</h1>
      </div>
      <div className={`${styles.customersTableContainer}`}>
        <table className="table table-striped">
          <thead>
            <tr className="">
              <th scope="col">#</th>
              <th scope="col">User</th>
              <th scope="col">Email</th>
              <th scope="col">Subject</th>
              <th scope="col">Message</th>
              <th scope="col">Status</th>
              {/* <th scope="col">Delete</th> */}
            </tr>
          </thead>
          <tbody>
            {complaints.map((user, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{user.firstName} {user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.problem}</td>
                  <td>{user.description}</td>
                  <td>
                    <button
                      name={user.id}
                      type="button"
                      className={`${styles.btnDelete} btn ${user.resolved ? "btn-success" : "btn-danger"}`}
                      onClick={markAsResolved}
                    >
                      {user.resolved ? "Resolved" : "Resolve"}
                    </button>
                  </td>
                  <td>
                    {/* <button
                      type="button"
                      className={`${styles.btnDelete} btn btn-danger`}
                    >
                      Delete
                    </button> */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
