import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setErrors] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    localStorage.setItem("user", JSON.stringify(data));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:4000/api/auth";
      const { data: res } = await axios.post(url, data);
      console.log("res", res)
      localStorage.setItem("token", res.data);
      window.location = "/MainMenu";
      console.log(res.data);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500
      ) {
        setErrors(error.response.data.message);
      }
    }
  };

  return (
    <div
    className="App"
    style={{
      backgroundImage: `url("https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "110vh",
    }}
  >
    <div className={styles.login_contaier}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Login An Account</h1>

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
              Login
            </button>
          </form>
        </div>
        <div className={styles.right}>
          <h1>New here ?</h1>
          <Link to="/Signup">
            <button type="button" className={styles.white_btn}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Login;
