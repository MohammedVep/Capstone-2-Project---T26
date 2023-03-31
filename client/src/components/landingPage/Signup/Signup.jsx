import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useState } from "react";
import axios from "axios";
import Payment from "./Payment";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  });

  const [error, setErrors] = useState("");

  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  //"https://capstonefeb15.onrender.com/api/signup/tutor

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://t26-server.herokuapp.com/api/user/signup";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("user", JSON.stringify(res));
      navigate("/Payment");
      console.log(res);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500
      ) 
        setErrors(error.response.data);
        console.log(error.response);
      }
    }
  

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
            <h1>Create Account for student</h1>

            <input
              type="text"
              placeholder="First Name"
              name="firstname"
              value={data.firstname}
              required
              className={styles.input}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="Last Name"
              name="lastname"
              value={data.lastname}
              required
              className={styles.input}
              onChange={handleChange}
            />

            <input
              type="number"
              placeholder="Phone Number"
              name="phone"
              value={data.phone}
              required
              className={styles.input}
              onChange={handleChange}
            />

            <input
              type="email"
              placeholder="Email"
              name="email"
              value={data.email}
              required
              className={styles.input}
              onChange={handleChange}
            />

            <input
              type="password"
              placeholder="Password"
              name="password"
              value={data.password}
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
};

export default Signup;
