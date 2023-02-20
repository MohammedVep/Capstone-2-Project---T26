import React from 'react'
import ApplyTutor from './ApplyTutor'
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const BecomeTutor = () => {
  return (
    <>
      <div className="main">
        <h1 className="about-main">Become Tutor</h1>
        <br />
        <h2 className='about-point'>Have fun helping students succeed on your own schedule</h2>
        <br />
        <h2 className='about-point'>You are in the right place</h2>
        <br />
        <h2 className='about-point'>Get paid $500 dollars per tutoring session</h2>
        <Link to='/ApplyTutor'>
            <button type="button" className={styles.white_btn}>
              Become Tutor
            </button>
        </Link>
      </div>
    </>
  )
}

export default BecomeTutor