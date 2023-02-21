import React from 'react'

const UpdateInformation = () => {
    const[value, setValue] = React.useState('province');
    const handleChange = (event) => {
        setValue(event.target.value);
    }
  return (
    <>
        <h1 className="page-title">Update Information</h1>
            <br />
            <div className="component">
              <form>
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
                <label htmlFor="transitN" className="form-name">Transit Number: </label>
                <input type="text" id="transitN" name="transitN" />
                <br />
                <label htmlFor="accN" className="form-name">Account Number: </label>
                <input type="text" id="accN" name="accN" />
                <br />
                <label htmlFor="branchN" className="form-name">Branch Number: </label>
                <input type="text" id="branchN" name="branchN" />
                <br />
                <input className="btn btn-primary" type="submit" defaultValue="Update info" />
                <br />
              </form>
            </div>
    </>
  )
}

export default UpdateInformation