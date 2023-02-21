import React from 'react'
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Payment = () => {
    const [data, setData] = useState({
        creditCardNum: "",
        expyDate: "",
        securityCode: "",
        cardHolderName: "",
      });
    
      const [error, setErrors] = useState("");
    
      const navigate = useNavigate();
    
      const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const url = "http://locahost:4000/api/signup/user";
          const { data: res } = await axios.post(url, data);
          navigate("/login");
          console.log(res.message);
        } catch (error) {
          if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500
          ) {
            setErrors(error.response.data.message);
            console.log(error.response);
          }
        }
      };
    
      return (
        <div
        className="App"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")`,
          backgroundSize: "cover",
          height: "100vh",
          opacity: "0.9",
        }}
      >
        <div className={styles.signup_contaier}>
          <div className={styles.signup_form_container}>
            <div className={styles.left}>
              <h1>Login ?</h1>
              <Link to="/Login">
                <button type="button" className={styles.white_btn}>
                  Sign In
                </button>
              </Link>
            </div>
            <div className={styles.right}>
              <form className={styles.form_container} onSubmit={handleSubmit}>
                <h1>Credit Card Information</h1>
    
                <input
                  type="text"
                  placeholder="Credit Card Number"
                  name="creditCardNum"
                  value={data.creditCardNum}
                  required
                  className={styles.input}
                  onChange={handleChange}
                />
    
                <input
                  type="text"
                  placeholder="Exiry Date"
                  name="expyDate"
                  value={data.expyDate}
                  required
                  className={styles.input}
                  onChange={handleChange}
                />
    
                <input
                  type="number"
                  placeholder="Security Code"
                  name="securityCode"
                  value={data.securityCode}
                  required
                  className={styles.input}
                  onChange={handleChange}
                />
    
                <input
                  type="text"
                  placeholder="Card holder name"
                  name="cardHolderName"
                  value={data.cardHolderName}
                  required
                  className={styles.input}
                  onChange={handleChange}
                />
                
    
                {error && <div className={styles.erro_msg}>{error}</div>}
    
                <button type="submit" className={styles.green_btn}>
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
        </div>
      );
}

export default Payment