import React, { useContext } from 'react';
import SignUpForm from '../components/SignUpForm';
import {Redirect} from 'react-router-dom';
import UserContext from '../utils/UserContext';

function SignUp(props){
    const {loggedIn} = useContext(UserContext);
    console.log(loggedIn);
    return (
        <div className="container">
            {loggedIn && <Redirect to="/" />}
            <h2>Please Register For Your Account</h2>
            <SignUpForm  />
        </div>
    )
}
export default SignUp;