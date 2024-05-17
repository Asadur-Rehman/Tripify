import React, { useState, useEffect } from "react";
import styles from "./admincustomers.module.css";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import axios from "axios";

export default function AdminCustomersInfo() {
  //Page dynamic data
  const [numberOfCustomers, setNumberOfCustomers] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/getAllUsers').then((response) => {
      if (response.data.status) {
        setUsers(response.data.result);
        setNumberOfCustomers(response.data.result.length);
      }
    })
  }, [])

  // Table dynamic data
  // const user = {
  //     name: 'Mohsin Sheikh',
  //     email: 'sheikhmohsin181@gmail.com',
  //     phone: '03115643979',
  //     verified: true,
  //     lastCheckOut: '10-02-2022',
  //     group: 'Diamond',
  //   };
  //   const users = [user, user, user, user, user];

  const deleteUser = async (event) => {
    axios.post(`http://localhost:8000/deleteUser/${event.target.name}`).then((response) => {
      if (response.data.status) {
        axios.get('http://localhost:8000/getAllUsers').then((response) => {
          if (response.data.status) {
            setUsers(response.data.result);
            setNumberOfCustomers(response.data.result.length);
          }
        })
      }
    })
  }

  return (
    <div className={`${styles["customers-container"]}`}>
      <div className={`${styles["sidebar-container"]}`}>
        <AdminNavbar className={`${styles.nav}`} />
      </div>

      <div className={`${styles.customerHeading}`}>
        <h1>Customer's List</h1>
        <p>You have total {numberOfCustomers} customers.</p>
      </div>
      <div className={`${styles.customersTableContainer}`}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Delete</th>
              {/* <th scope="edit">Edit</th> */}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return <tr>
                <th scope="row">{user.id}</th>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                {/* <td>{user.verified === true ? '✅ Verified' : '❌ Not Verified'}</td> */}
                <td>{user.email}</td>
                {/* <td>{user.group}</td> */}
                <td><button onClick={deleteUser} name={user.id} type="button" className={`${styles.btnDelete} btn btn-danger`}>Delete</button></td>
                {/* <td><button type="button" className={`${styles.btnEdit} btn btn-primary`}>Edit</button></td> */}
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
