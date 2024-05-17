import React from 'react'
import styles from './navlinks.module.css';
import { Link } from 'react-router-dom';

export default function NavLinks(props) {
    const {name, link, iconClasses} = props.linkData;

    return (
    <Link to={props.to}>
    <div className={`${styles['nav-link-container']}`}>
        <div className={`${styles['link-icon-container']}`}>
            <i class="fas fa-calendar-alt"></i>
        </div>
        <div className={`${styles['nav-link-text-container']}`}>
            <p>{name}</p>
        </div>
    </div>
    </Link>
  )
}
