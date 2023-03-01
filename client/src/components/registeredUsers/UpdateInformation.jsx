import React ,  {useEffect, useState} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const UpdateInformation = () => {
    const[value, setValue] = React.useState('province');
    const [error, setErrors] = useState("");
    const [user, setUser] = useState()
    const navigate = useNavigate();
    const handleChange = ({ currentTarget: input }) => {
        setUser({ ...user, [input.name]: input.value });
    };

    const handleFormSubmit = async (ev) => {
        ev.preventDefault();
        console.log("update")
        try {
            const url = "http://localhost:4000/api/user/update";
            const { data: res } = await axios.post(url, user);
            // navigate("/MainMenu");
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
            <div className="component text-center" >
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="firstname" className="form-name">First Name: </label>
                    <input type="text" id="firstname" name="firstname" onChange={handleChange}/>
                    <br />
                    <label htmlFor="lname" className="form-name">Last Name: </label>
                    <input type="text" id="lname" name="lname" onChange={handleChange}/>
                    <br />
                    <label htmlFor="address" className="form-name">Address: </label>
                    <input type="text" id="address" name="address" onChange={handleChange}/>
                    <br />
                    <label htmlFor="city" className="form-name">City: </label>
                    <input type="text" id="city" name="city" onChange={handleChange}/>
                    <br />
                    <label htmlFor="province" className="form-name">Province: </label>
                    <input type="text" id="province" name="province" onChange={handleChange}/>
                    <br />
                    <label htmlFor="pcode" className="form-name">Postal Code: </label>
                    <input type="text" id="pcode" name="pcode" onChange={handleChange}/>
                    <br />
                    <label htmlFor="country" className="form-name">Country: </label>
                    <input type="text" id="country" name="country" onChange={handleChange}/>
                    <br />
                    <label htmlFor="email" className="form-name">Email: </label>
                    <input type="email" id="email" name="email" onChange={handleChange}/>
                    <br />
                    <label htmlFor="password" className="form-name">Password: </label>
                    <input type="password" id="password" name="password" onChange={handleChange} />
                    <br />
                    <label htmlFor="cpassword" className="form-name">Confirm Password: </label>
                    <input type="password" id="cpassword" name="cpassword" onChange={handleChange}/>
                    <br />
                    <label htmlFor="cname" className="form-name">Credit Card Name: </label>
                    <input type="text" id="cname" name="cname" onChange={handleChange}/>
                    <br />
                    <label htmlFor="ccnum" className="form-name">Credit Card Number: </label>
                    <input type="text" id="ccnum" name="ccnum" onChange={handleChange}/>
                    <br />
                    <label htmlFor="expmonth" className="form-name">Exp Month: </label>
                    <input type="text" id="expmonth" name="expmonth" onChange={handleChange}/>
                    <br />
                    <label htmlFor="expyear" className="form-name">Exp Year: </label>
                    <input type="text" id="expyear" name="expyear" onChange={handleChange}/>
                    <br />
                    <label htmlFor="cvv" className="form-name">CVV: </label>
                    <input type="text" id="cvv" name="cvv" />
                    <input className="btn btn-primary" type="submit" defaultValue="Update info" />
                </form>
                <br />
            </div>
    </>
  )
}

export default UpdateInformation