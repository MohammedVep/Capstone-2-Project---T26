import React from 'react'
import { useNavigate } from 'react-router-dom';
const UpdateInformation = () => {
    const[value, setValue] = React.useState('province');
    const navigate = useNavigate();
    const handleChange = (event) => {
        setValue(event.target.value);
        
    }
    const handleFormSubmit = (ev) => {
        ev.preventDefault();
        console.log("update")
        
    };
  return (
    <>
        <h1 className="page-title">Update Information</h1>
            <br />
            <div className="component text-center" >
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="fname" className="form-name">First Name: </label>
                    <input type="text" id="fname" name="fname" />
                    <br />
                    <label htmlFor="lname" className="form-name">Last Name: </label>
                    <input type="text" id="lname" name="lname" />
                    <br />
                    <label htmlFor="address" className="form-name">Address: </label>
                    <input type="text" id="address" name="address" />
                    <br />
                    <label htmlFor="city" className="form-name">City: </label>
                    <input type="text" id="city" name="city" />
                    <br />
                    <label htmlFor="province" className="form-name">Province: </label>
                    <input type="text" id="province" name="province" />
                    <br />
                    <label htmlFor="pcode" className="form-name">Postal Code: </label>
                    <input type="text" id="pcode" name="pcode" />
                    <br />
                    <label htmlFor="country" className="form-name">Country: </label>
                    <input type="text" id="country" name="country" />
                    <br />
                    <label htmlFor="email" className="form-name">Email: </label>
                    <input type="email" id="email" name="email" />
                    <br />
                    <label htmlFor="password" className="form-name">Password: </label>
                    <input type="password" id="password" name="password" />
                    <br />
                    <label htmlFor="cpassword" className="form-name">Confirm Password: </label>
                    <input type="password" id="cpassword" name="cpassword" />
                    <br />
                    <label htmlFor="cname" className="form-name">Credit Card Name: </label>
                    <input type="text" id="cname" name="cname" />
                    <br />
                    <label htmlFor="ccnum" className="form-name">Credit Card Number: </label>
                    <input type="text" id="ccnum" name="ccnum" />
                    <br />
                    <label htmlFor="expmonth" className="form-name">Exp Month: </label>
                    <input type="text" id="expmonth" name="expmonth" />
                    <br />
                    <label htmlFor="expyear" className="form-name">Exp Year: </label>
                    <input type="text" id="expyear" name="expyear" />
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