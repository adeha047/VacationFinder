import React, { Fragment, useContext, useRef } from 'react';
import API from "../../utils/API";
import { useHistory } from 'react-router-dom';
import UserContext from '../../utils/UserContext';

function LoginForm(props) {
    const { email, setEmail, loggedIn, setLoggedIn } = useContext(UserContext);
    const history = useHistory();
    const emailInput = useRef();
    const passwordInput = useRef();
    let extraProps = {}
    if (props.className) {
        extraProps.className = props.className;
    }
    let emailId = props.className ? props.className + "-login-email" : "login-email";
    let passwordId = props.className ? props.className + "-login-password" : "login-password";
    const handleSubmit = event => {
        // if the user hits enter or hits the button, this function will fire
        event.preventDefault();
        // console.log("submit happened");
        // console.log({ email: emailInput.current.value, password: passwordInput.current.value});
        API.login({ email: emailInput.current.value, password: passwordInput.current.value })
            .then(data => {
                // console.log(data);
                setEmail(data.data.email);
                setLoggedIn(true);
                history.push("/");
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <Fragment>
            {!loggedIn ?
                    <div className="form-container">
                        <form className="register-form" {...extraProps} onSubmit={handleSubmit}>
                            
                            {/* Email */}
                            <div className='form-inputs'>
                                <label htmlFor={emailId}
                                    className='form-label'>
                                    Email:
                                </label>
                                <input
                                    className="form-field"
                                    ref={emailInput}
                                    type="email"
                                    id={emailId}
                                />
                            </div>
                            
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
                            
                            <button
                                className="form-field"
                                type="submit">Submit
                            </button>
                        </form>
                    </div>
                :
                    <h3>{email}</h3>
                }
        </Fragment>
    )
}
export default LoginForm;