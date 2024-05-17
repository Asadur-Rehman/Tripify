import { React, useState, useEffect } from "react";
import styles from "./adminbookings.module.css";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import axios from "axios";

export default function AdminBookings() {
  //Page dynamic data
  const [numberOfBookings, setNumberOfBookings] = useState(0);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/getAllBookings').then((response) => {
      setBookings(response.data.result);
      setNumberOfBookings(response.data.result.length);
    })
  }, [])

  //Table dynamic data
  // const user = {
  //     name: 'Mohsin Sheikh',
  //     email: 'sheikhmohsin181@gmail.com',
  //     hotel: 'Continental',
  //     booking: 'active',
  //     roomtype: 'Single',
  //     arrive: '10-02-2020',
  //     payment: 'Paid',
  //   };
  //   const users = [user, user, user, user, user];
  const confirmBooking = async (event) => {
    axios.post(`http://localhost:8000/confirmBooking/${event.target.name}`).then((response) => {
      axios.get('http://localhost:8000/getAllBookings').then((response) => {
        setBookings(response.data.result);
        setNumberOfBookings(response.data.result.length);
      })
    })
  }

  return (
    <div className={`${styles["customers-container"]}`}>
      <div className={`${styles["sidebar-container"]}`}>
        <AdminNavbar className={`${styles.nav}`} />
      </div>

      <div className={`${styles.customerHeading}`}>
        <h1>Booking's List</h1>
        <p>You have total {numberOfBookings} bookings.</p>
      </div>
      <div className={`${styles.customersTableContainer}`}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">User</th>
              <th scope="col">Email</th>
              <th scope="col">Contact</th>
              <th scope="col">Hotel Name</th>
              <th scope="col">Country</th>
              <th scope="col">City</th>
              <th scope="col">Room Type</th>
              <th scope="col">Arrive</th>
              <th scope="col">Room Number</th>
              <th scope="edit">Approve</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((user, index) => {
              return <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.customerName}</td>
                <td>{user.customerEmail}</td>
                <td>{user.customerContactNumber}</td>
                <td>{user.hotelName}</td>
                <td>{user.country}</td>
                <td>{user.city}</td>
                <td>{user.roomType}</td>
                <td>{user.arrivalTime}</td>
                <td>{user.roomNumber}</td>
                <td><button type="button" name={user.id} onClick={confirmBooking} className={`${styles.btnEdit} btn ${user.bookingStatus ? "btn-success" : "btn-warning"}`}>{user.bookingStatus ? "Confirmed" : "Confirm"}</button></td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
