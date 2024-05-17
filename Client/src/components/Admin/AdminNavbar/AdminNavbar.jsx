import React from 'react';
import styles from './adminnavbar.module.css';
import NavLink from './NavLinks/NavLinks';

export default function AdminNavbar() {
  const linksData = {
    'dashboard': {
      'name': 'Dashboard',
      'link': '',
      'iconClasses': ''
    },
    'hotels': {
      'name': 'Hotels',
      'link': '',
      'iconClasses': ''
    },
    'bookings': {
      'name': 'Bookings',
      'link': '',
      'iconClasses': 'fas fa-calendar-alt'
    },
    'customers': {
      'name': 'Customers',
      'link': '',
      'iconClasses': ''
    },
    'support': {
      'name': 'Support',
      'link': '',
      'iconClasses': ''
    },
  }

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles['navbar-heading']}`}>
        <div className={`${styles['nav-heading-icon']}`}>
          <i className={`fas fa-bars ${styles.icon}`}></i>
        </div>
        <div className={`${styles['nav-heading-logo']}`}>
          <img src={require('../../../assets/logo.png')} alt='logo' />
        </div>
      </div>

      <hr />
      <div className={`${styles.gap}`}></div>
      <NavLink to='/admin-dash' linkData={linksData.dashboard} />
      <NavLink to='/adminHotel' linkData={linksData.hotels} />
      <NavLink to='/adminbookings' linkData={linksData.bookings} />
      <NavLink to='/customerAdmin' linkData={linksData.customers} />
      <NavLink to='/adminSupport' linkData={linksData.support} />
    </div>
  )
}
