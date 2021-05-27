import React, { Fragment, useContext, useRef, useState } from 'react';
import UserContext from '../../utils/UserContext';
import API from '../../utils/API';

function SignUpForm(props) {
    const { email, setEmail, loggedIn, setLoggedIn } = useContext(UserContext);
    const emailInput = useRef();
    const passwordInput = useRef();
    let extraProps = {}
    if (props.className) {
        extraProps.className = props.className
    }
    let emailId = props.className ? props.className + "-signup-email" : "signup-email";
    let passwordId = props.className ? props.className + "-signup-password" : "signup-password";

    // const [values, setValues] = useState({
    //     // firstName: "",
    //     // lastName: "",
    //     email: "",
    //     password: ""
    // });
    // //submit
    // const [submitted, setSubmitted] = useState(false);

    // //valdi
    // const [valid, setValid] = useState(false);

    // // const handleFirstNameInput = (event) => {
    // //     setValues({ ...values, firstName: event.target.value })
    // // }
    // // const handleLastNameInput = (event) => {
    // //     setValues({ ...values, lastName: event.target.value })
    // // }
    // const handleEmailInput = (event) => {
    //     setValues({ ...values, email: event.target.value })
    // }
    // const handlePasswordInput = (event) => {
    //     setValues({ ...values, password: event.target.value })
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(values);
        // if (values.email && values.password) {
        //     setValid(true);
        // }
        // setSubmitted(true);
        API.signup({
            email: emailInput.current.value,
            password: passwordInput.current.value
        })
            .then(data => {
                // console.log(data);
                setEmail(data.data.email);
                setLoggedIn(true);
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <Fragment>
            { (() => {
                if (!loggedIn) {
                    return (
                        <div className="form-container">
                            <form {...extraProps} className="register-form" onSubmit={handleSubmit}>
                                {/* {submitted && valid ? <div className="success">Congratulation! You Have Registered</div> : null} */}
                                {/* First Name
                                <div className='form-inputs'>
                                    <label htmlFor={firstNameId}
                                        className='form-label'>
                                        First Name:
                                    </label>
                                    <input
                                        onChange={handleFirstNameInput}
                                        ref={firstNameInput}
                                        type="firstName"
                                        className="form-field"
                                        value={values.firstName}
                                        placeholder="First Name"
                                        id={firstNameId}
                                    />
                                </div>
                                {/* error message for not typing a First Name */}
                                {/* {submitted && !values.firstName ? <span>Please Enter A First Name</span> : null} */}

                                {/* Last Name */}
                                {/* <div className='form-inputs'>
                                    <label htmlFor={lastNameId}
                                        className='form-label'>
                                        Last Name:
                                    </label>
                                    <input
                                        onChange={handleLastNameInput}
                                        ref={lastNameInput}
                                        type="lastName"
                                        className="form-field"
                                        value={values.lastName}
                                        placeholder="Last Name"
                                        id={lastNameId}
                                    />
                                </div> */}
                                {/* error message for not typing a Last Name */}
                                {/* {submitted && !values.lastName ? <span>Please Enter A Last Name</span> : null} */}

                                {/* Email */}
                                <div className='form-inputs'>
                                    <label htmlFor={emailId}
                                        className='form-label'>
                                        Email:
                                    </label>
                                    <input
                                        ref={emailInput}
                                        type="email"
                                        className="form-field"
                                        id={emailId}
                                    />
                                </div>
                                {/* error message for not typing an email */}
                                {/* {submitted && !values.email ? <span>Please Enter An Email</span> : null} */}

                                {/* Password */}
                                <div className='form-inputs'>
                                    <label htmlFor={passwordId}
                                        className='form-label'>
                                        Password:
                                    </label>
                                    <input
                                        ref={passwordInput}
                                        type="password"
                                        className="form-field"
                                        id={passwordId}
                                    />
                                </div>
                                {/* error message for not typing a password */}
                                {/* {submitted && !values.password ? <span>Please Enter A Password</span> : null} */}

                                <button
                                    className="form-field"
                                    type="submit">Submit
                                </button>
                            </form>
                        </div>
                        );
                    }
                })()
                }
        </Fragment>
    )
}
export default SignUpForm;