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

    return (
        <div className= "form-container">
            <form className = "register-form">
                <div className = "success">Congratulation! You Have Registered</div>
                <input
                    onChange = {handleFirstNameInput}
                    className = "form-field"
                    value = {values.firstName}
                    placeholder = "First Name"
                    name = "firstName"
                />
                <input
                    onChange = {handleLastNameInput}
                    className = "form-field"
                    value = {values.lastName}
                    placeholder = "Last Name"
                    name = "lastName"
                />

                <input
                    onChange = {handleEmailInput}
                    className = "form-field"
                    value = {values.email}
                    placeholder = "Email"
                    name = "email"
                />

                <input
                    onChange = {handlePasswordInput}
                    className = "form-field"
                    value = {values.password}
                    placeholder = "Password"
                    name = "password"
                />
                <button
                    className= "form-field"
                    type = "submit">Submit
                </button>
            </form>
        </div>
    )
}
export default Login;