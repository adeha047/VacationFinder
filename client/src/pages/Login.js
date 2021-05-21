import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from '../components/LoginForm';
import { Redirect } from 'react-router-dom';
import UserContext from '../utils/UserContext';

function Login() {
    const[values, setValues] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password : ""
    });
    //submit
    const [submitted, setSubmitted] = useState(false);

    //valdi
    const [valid, setValid] = useState(false);
    
    const handleFirstNameInput = (event) => {
        setValues({... values, firstName: event.target.value})
    }
    const handleLastNameInput = (event) => {
        setValues({... values, lastName: event.target.value})
    }
    const handleEmailInput = (event) => {
        setValues({... values, email: event.target.value})
    }
    const handlePasswordInput = (event) => {
        setValues({... values, firstName: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(values.firstName && values.lastName && values.email){
            setValid(true);
        }
        setSubmitted(true);
    }

    return (
        <>
        <h2>Please Register For Your Account</h2>
        <div className= "form-container">
            <form className = "register-form" onSubmit = {handleSubmit}>
                {submitted && valid ? <div className = "success">Congratulation! You Have Registered</div> : null }
                <input
                    onChange = {handleFirstNameInput}
                    className = "form-field"
                    value = {values.firstName}
                    placeholder = "First Name"
                    name = "firstName"
                />
                {/* error message for not typing a First Name */}
                {submitted && !values.firstName ? <span>Please Enter A First Name</span> : null }
                <input
                    onChange = {handleLastNameInput}
                    className = "form-field"
                    value = {values.lastName}
                    placeholder = "Last Name"
                    name = "lastName"
                />
                {/* error message for not typing a Last Name */}
                {submitted && !values.lastName ? <span>Please Enter A Last Name</span> : null }
                <input
                    onChange = {handleEmailInput}
                    className = "form-field"
                    value = {values.email}
                    placeholder = "Email"
                    name = "email"
                />
                {/* error message for not typing an email */}
                {submitted && !values.email ? <span>Please Enter An Email</span> : null }
                {/* <input
                    onChange = {handlePasswordInput}
                    className = "form-field"
                    value = {values.password}
                    placeholder = "Password"
                    name = "password"
                />
                {/* error message for not typing a password */}
                {/* {submitted && !values.password ? <span>Please Enter A Password</span> : null} */} 

                <button
                    className= "form-field"
                    type = "submit">Submit
                </button>
            </form>
        </div>
        </>
    )
    console.log(input)
}
export default Login;