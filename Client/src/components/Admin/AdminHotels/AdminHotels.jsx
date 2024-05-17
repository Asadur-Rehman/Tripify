import React, { useState, useEffect } from 'react'
import styles from './adminhotel.module.css';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AdminHotels() {
  const [hotels, setHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [numberOfHotels, setNumberOfHotels] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/getAllHotels').then((response) => {
      if (response.data.status) {
        setHotels(response.data.result);
        setNumberOfHotels(response.data.result.length);
        setIsLoading(false);
      }
    })
  }, [])

  const deleteHotel = async (event) => {
    setIsLoading(true);
    axios.request(`http://localhost:8000/deleteHotelById/${event.target.name}`).then((response) => {
      if (response.data.status) {
        axios.get('http://localhost:8000/getAllHotels').then((response) => {
          if (response.data.status) {
            setHotels(response.data.result);
            setNumberOfHotels(response.data.result.length);
            setIsLoading(false);
          }
        })
      }
    }).catch(err => {
      setIsLoading(false);
      alert(err);
    })
  }

  return (
    <div className={`${styles["hotels-container"]}`}>
      <div className={`${styles["sidebar-container"]}`}>
        <AdminNavbar className={`${styles.nav}`} />
      </div>
      <div className={`${styles.hotelHeading}`}>
        <h1>Hotels's List</h1>
        {!isLoading &&
          <p>You have total {numberOfHotels} hotels.</p>
        }
        <button style={{ padding: '5px' }} className="btn btn-primary" onClick={() => {
          navigate('/addHotel')
        }}>Add Hotel</button>
      </div>
      <div className={`${styles.hotelsTableContainer}`}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Rooms</th>
              <th scope="col">Available Rooms</th>
              <th scope="col">City</th>
              <th scope="col">Country</th>
              <th scope="col">Delete</th>
              <th scope="edit">Edit</th>
            </tr>
          </thead>
          {isLoading && <h1>Loading...</h1>}
          {
            !isLoading &&
            <tbody>
              {hotels.map((hotel, index) => {
                return <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{hotel.name}</td>
                  <td>{hotel.numberOfAvailableRooms}</td>
                  <td>{hotel.numberOfRooms}</td>
                  <td>{hotel.city}</td>
                  <td>{hotel.country}</td>
                  <td><button type="button" onClick={deleteHotel} name={hotel.id} className={`${styles.btnDelete} btn btn-danger`}>Delete</button></td>
                  <td><button onClick={() => {
                    navigate(`/editHotel/${hotel.id}`)
                  }} type="button" className={`${styles.btnEdit} btn btn-primary`}>Edit</button></td>
                </tr>
              })}
            </tbody>
          }
        </table>
      </div>
    </div>
  )
}
