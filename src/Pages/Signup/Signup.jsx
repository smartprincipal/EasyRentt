import './Signup.css';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import facebook from '../../Assets/facebook.svg';
import twitter from '../../Assets/twitter.svg';
import google from '../../Assets/google.svg'


function SignUp () {

    const initialValues = {username: "", email: "", password: "", confirmedPassword: ""};
    const [inputValues, setInputValues] = useState(initialValues);
    const [inputErrors, setInputErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValues({...inputValues, [name]: value})
        console.log(inputValues)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setInputErrors(validate(inputValues));
        setIsSubmit(true);
    }
    
    const validate = (values) => {
        const errors = {};
        // const nameRegex = /^([A-Za-z0-9]).{5,20}$/;
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/
        if(!values.username) {
            errors.username = "Enter your first name";
        } else if(values.username.length < 5) {
            errors.username = "First name must be more than five(5) characters"
        }
        if(!values.email) {
            errors.email = "Enter your e-mail address";
        } else if(!regex.test(values.email)) {
            errors.email = "This is not a valid email address";
        }
        if(!values.password) {
            errors.password = "Create a password, it is required";
        } else if(values.password.length < 8) {
            errors.password = "Password characters must be more than eight(8)";
        } else if(values.password.length > 20) {
            errors.password = "Password characters must not be more than twenty(20)";
        } else if(passwordRegex.test(values.password)) {
            errors.password ="Password must have a number, capital letter and a special character"
        }
        if(!values.confirmedPassword) {
            errors.confirmedPassword = "Confirmed your password";
        } else if(values.confirmedPassword !== values.password) {
            errors.confirmedPassword = "Password not matched...";
        };
        return errors;
    }

    useEffect(()=> {
        console.log(inputErrors);
        if(Object.keys(inputErrors).length === 0 && isSubmit)    {
            console.log(inputValues)
        }
    }, [inputErrors]
    );


    return (

    <div className="login-form">
        <small className="success_note">
                {Object.keys(inputErrors).length === 0 && isSubmit ?
                <span className='success_note'>Sign up successfully</span> : null}
            </small>
        <div className='close_icon'>
            &times;
        </div>
        <h2 className="sign_head">Sign Up</h2>

        <p className="p-head">
            
            Fill the information below to signup
        </p>

        <form action="" onSubmit={handleSubmit}>
            <div className="input-wrap">
                <label className="input_label" htmlFor="username">Username</label>
                <input className="input_type" type="text" value={inputValues.username} onChange={handleChange} id="firstName" name="username" placeholder="Enter first name..." />
                <small className="small_tag">{inputErrors.username}</small>
            </div>

                     
           <div className="input-wrap">
                <label className="input_label" htmlFor="email">Email address</label>
                <input className="input_type" type="email" value={inputValues.email} onChange={handleChange} id="eMail" name="email" placeholder="Enter email address..." />
                <small className="small_tag">{inputErrors.email}</small>
            </div>
            
            <div className="input-wrap">
                <label className="input_label" htmlFor="password">Password</label>
                <input className="input_type" type="password" value={inputValues.password} onChange={handleChange} id="password" name="password" placeholder="Password" />
                <small className="small_tag">{inputErrors.password}</small>
            </div>
    
            <div className="input-wrap">
                <label className="input_label" htmlFor="confirmedPassword">Confirm Password</label>
                <input className="input_type" type="password" value={inputValues.confirmedPassword} onChange={handleChange} id="password" name="confirmedPassword" placeholder="Confirmed password..." />
                <small className="small_tag">{inputErrors.confirmedPassword}</small>
            </div>
            <button className="signButton">Sign Up</button>
    
            
        </form>

        <p className="hav-acct">Already have an account?
            <span className="login">
             <a href="#">Login.</a>
            </span>
        </p>

        <p className="or-opt"><span className="or">Or</span><br/>
        Sign up with
        
         </p>

        <div className="login-opt">
            <a href="#">
                <img className="m-icon m-icon2" src={google} alt="google icon" />
            </a>
            
            <a href="#">           
                <img className="m-icon" src={facebook} alt="facebook icon" />
            </a>

            <a href="#">
             <img className="m-icon m-icon2" src={twitter} alt="twitter icon" />
            </a>
            
        </div>
        
    </div>
    );
}

export default SignUp;