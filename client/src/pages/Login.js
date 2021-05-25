import React, { useState } from 'react';

function Login() {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });
    //submit
    const [submitted, setSubmitted] = useState(false);

    //valdi
    const [valid, setValid] = useState(false);

    const handleFirstNameInput = (event) => {
        setValues({ ...values, firstName: event.target.value })
    }
    const handleLastNameInput = (event) => {
        setValues({ ...values, lastName: event.target.value })
    }
    const handleEmailInput = (event) => {
        setValues({ ...values, email: event.target.value })
    }
    const handlePasswordInput = (event) => {
        setValues({ ...values, password: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        if (values.firstName && values.lastName && values.email && values.password) {
            setValid(true);
        }
        setSubmitted(true);
    }

    return (
        <>
            <h2>Please Register For Your Account</h2>
            <div className="form-container">
                <form className="register-form" onSubmit={handleSubmit}>
                    {submitted && valid ? <div className="success">Congratulation! You Have Registered</div> : null}
                    {/* First Name */}
                    <div className='form-inputs'>
                        <label htmlFor='firstName'
                            className='form-label'>
                            First Name:
                        </label>
                        <input
                            onChange={handleFirstNameInput}
                            className="form-field"
                            value={values.firstName}
                            placeholder="First Name"
                            name="firstName"
                        />
                    </div>
                    {/* error message for not typing a First Name */}
                    {submitted && !values.firstName ? <span>Please Enter A First Name</span> : null}

                    {/* Last Name */}
                    <div className='form-inputs'>
                        <label htmlFor='firstName'
                            className='form-label'>
                            Last Name: 
                        </label>
                        <input
                            onChange={handleLastNameInput}
                            className="form-field"
                            value={values.lastName}
                            placeholder="Last Name"
                            name="lastName"
                        />
                    </div>
                    {/* error message for not typing a Last Name */}
                    {submitted && !values.lastName ? <span>Please Enter A Last Name</span> : null}

                    {/* Email */}
                    <div className='form-inputs'>
                        <label htmlFor='firstName'
                            className='form-label'>
                            Email: 
                        </label>
                        <input
                            onChange={handleEmailInput}
                            className="form-field"
                            value={values.email}
                            placeholder="Email"
                            name="email"
                        />
                    </div>
                    {/* error message for not typing an email */}
                    {submitted && !values.email ? <span>Please Enter An Email</span> : null}

                    {/* Password */}
                    <div className='form-inputs'>
                        <label htmlFor='firstName'
                            className='form-label'>
                            Password:
                        </label>
                        <input
                            onChange={handlePasswordInput}
                            className="form-field"
                            value={values.password}
                            placeholder="Password"
                            name="password"
                        />
                    </div>
                    {/* error message for not typing a password */}
                    {submitted && !values.password ? <span>Please Enter A Password</span> : null}

                    <button
                        className="form-field"
                        type="submit">Submit
                </button>
                </form>
            </div>
        </>
    )
}
export default Login;