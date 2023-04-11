import React, { useState } from 'react';
import "./TutorUpdateInformation.css"
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";

const UpdateInformation = () => {
  const [error, setErrors] = useState("");
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setUser({ ...user, [input.name]: input.value });
  };

  const handleFormSubmit = async (ev) => {
    ev.preventDefault();
    console.log("update")
    try {
      const url = "https://t26-server.herokuapp.com/api/tutor/update";
      const { data: res } = await axios.post(url, user);
      navigate("/tutor/TutorMainMenu");

    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500
      ) {
        setErrors(error.response.data);
        console.log(error.response);
      }
    }
  };

  return (
    <>
      <h1 className="page-title">Update Information</h1>
      <br />
      <div className="component">
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="fname" className="form-name">First Name: </label>
          <input type="text" id="fname" name="fname" onChange={handleChange} />

          <label htmlFor="lname" className="form-name">Last Name: </label>
          <input type="text" id="lname" name="lname" onChange={handleChange} />

          <label htmlFor="address" className="form-name">Address: </label>
          <input type="text" id="address" name="address" onChange={handleChange} />

          <label htmlFor="city" className="form-name">City: </label>
          <input type="text" id="city" name="city" onChange={handleChange} />

          <label htmlFor="province" className="form-name">Province: </label>
          <input type="text" id="province" name="province" onChange={handleChange} />

          <label htmlFor="pcode" className="form-name">Postal Code: </label>
          <input type="text" id="pcode" name="pcode" onChange={handleChange} />

          <label htmlFor="country" className="form-name">Country: </label>
          <input type="text" id="country" name="country" onChange={handleChange} />

          <label htmlFor="email" className="form-name">Email: </label>
          <input type="email" id="email" name="email" onChange={handleChange} />

          <label htmlFor="password" className="form-name">Password: </label>
          <input type="password" id="password" name="password" onChange={handleChange} />

          <label htmlFor="cpassword" className="form-name">Confirm Password: </label>
          <input type="password" id="cpassword" name="cpassword" onChange={handleChange} />

          <label htmlFor="transitN" className="form-name">Transit Number: </label>
          <input type="text" id="transitN" name="transitN" onChange={handleChange} />

          <label htmlFor="accN" className="form-name">Account Number: </label>
          <input type="text" id="accN" name="accN" onChange={handleChange} />

          <label htmlFor="branchN" className="form-name">Branch Number: </label>
          <input type="text" id="branchN" name="branchN" onChange={handleChange} />

          <input className="btn btn-primary" type="submit" defaultValue="Update info" />
          <a className="btn btn-primary" role="button"><Link to="/TutorMainMenu">Cancel</Link></a>
        </form>
      </div>
    </>
  )
}

export default UpdateInformation