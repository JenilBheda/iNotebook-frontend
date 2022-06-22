import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", confirmPassword: "" })

    let navigate = useNavigate(props);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;
        const response = await fetch("https://inotebackup.herokuapp.com/api/auth/createUser", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ name, email, password }) // body data type must match "Content-Type" header
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            //   Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate("/ShowNotes")
            props.showAlert("Account Created Successfully!", "success");

        }
        else {
            props.showAlert("Invalid Details", "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="signUpBody">
                <div className="SignUpHead">
                    <div className="signUpSection">
                        <h2 className='signUpHeading'>Sign Up</h2>
                    </div>
                    <div className="signUpBox">
                        <div className="signUpPage">
                            <div className="container mt-2">
                                <form className='signUpForm' onSubmit={handleSubmit}>
                                    <div className="signUpFormDiv mb-3">
                                        <label htmlFor="name" className="form-label signUp-name-label">Name :</label>
                                        <div className="signUpNameSection">
                                        <input type="Text" className="nameInput" name='name' id="name" onChange={onChange} />
                                        </div>
                                    </div>
                                    <div className="mb-3 signUpEmail">
                                        <label htmlFor="email" className="form-label signUp-email-label">Email address :</label>
                                        <input type="email" className="signUpEmailInput" name='email' id="email" onChange={onChange} aria-describedby="emailHelp" />
                                        {/* <div id="emailHelp" className="form-text  signUpEmailInput">We'll never share your email with anyone else.</div> */}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label signUp-password-label">Password :</label>
                                        <input type="password" className="signUpInputPassword" name='password' id="password" onChange={onChange} minLength={5} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="confirmPassword" className="form-label signUp-confirmPass-label">Confirm Password :</label>
                                        <input type="password" className="signUpConfirmPasswordInput" name='confirmPassword' id="confirmPassword" onChange={onChange} minLength={5} required />
                                    </div>
                                    <div className="signUpPageSection">
                                    <button type="submit" className="signUpPageBtn"><i className="fa-solid fa-arrow-right"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup