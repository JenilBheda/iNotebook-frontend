import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  let navigate = useNavigate();

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    const response = await fetch("https://inotebookreal.herokuapp.com/api/auth/login", {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password }) // body data type must match "Content-Type" header
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //   Save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      // navigate("/ShowNotes") page will be redirected to this location after login
      navigate("/ShowNotes");
      props.showAlert("Logged in Successfully!", "success ");

    }
    else {
      props.showAlert("Invalid Credenetails", "danger");
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div className="loginBody">
        <div className="loginHead">
          <div className="loginSection">
            <h2 className='loginHeading'>Login</h2>
          </div>
          <div className="loginBox">
            {/* <div className='loginPage'> */}
            <form className='loginForm' onSubmit={handleSubmit}>
              <div className="mb-3 my-2">
                <label htmlFor="email" className="form-label login-email-label">Email address :</label>
                <input type="email" className="email-input" id="email" name="email" onChange={onChange} value={credentials.email} aria-describedby="emailHelp" />
                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
              </div>
              <div className="mb-3 my-2 ">
                <label htmlFor="password" className="form-label login-password-label">Password :</label>
                <input type="password" className="password-input" name="password" onChange={onChange} value={credentials.password} id="password" />
              </div>
              <div className="loginPageBtnSection">
                <button type="submit" className="loginPageBtn"><i className="fa-solid fa-arrow-right"></i></button>
              </div>
            </form>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Login