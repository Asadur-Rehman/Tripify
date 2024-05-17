import React from 'react';
import styles from './message.module.css';

export default function Message() {
  const message1 = {
    name: 'Mohsin',
    initials: 'MS',
    subject: 'I don\'t know',
    message: 'I also don\'t know the message I\'m going to tell you',
  }

  return (
    <div className='col-12 row pt-2 pb-2 d-flex align-items-center'>
        <div className='col-3 ps-3'>
            <span className="rounded-circle bg-black p-2">
                MJ
            </span>
        </div>

        <div className='col-9'>
            <div className='fs-6 fw-semibold'>{message1.name}</div>
            <div className={`text-secondary text-opacity-75 ${styles.lowerText}`}>{message1.message}</div>
        </div>
    </div>
  )
}
