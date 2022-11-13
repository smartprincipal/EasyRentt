import './Signup.css';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import facebook from '../../Assets/facebook.svg';
import twitter from '../../Assets/twitter.svg';
import google from '../../Assets/google.svg'


function SignUp () {

    const initialValues = {username: "", email: "", password: ""};
    const [inputValues, setInputValues] = useState(initialValues);
    const [inputErrors, setInputErrors] = useState({error: "error message"});
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
        const nameRegex = /^([A-Za-z0-9]).{5,20}$/;
        const eMailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[-\#\$\.\%\&\*])(?=.*[a-zA-Z]).{8,16}$/;
        if(!values.username) {
            errors.username = "Enter your first name";
        } else if(values.username.length < 5) {
            errors.username = "First name must be more than five(5) characters"
        }
        if(!values.email) {
            errors.email = "Enter your e-mail address";
        } else if(eMailRegex.text(values.email)) {
            errors.email = "This is not a valid email address"
        }
        if(!values.password) {
            errors.password = "Create a password, it is required";
        } else if(values.password) {
            errors.password = "Password characters must be more than eight(8)"
        } else if(passwordRegex.text(values.password)) {
            errors.password = "Password should contain atleast a number and capital letter"
        }
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
        <h2>Sign Up</h2>

        <p className="or-opt">Sign up with </p>
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

        <p className="p-head">
            <span className="or">Or</span><br/>
            Fill the information below to signup
        </p>

        <form action="" onSubmit={handleSubmit}>
            <div className="input-wrap">
                <label htmlFor="username">Username</label>
                <input type="text" value={inputValues.username} onChange={handleChange} id="firstName" name="username" placeholder="Enter first name..." />
                <small>{inputErrors.username}</small>
            </div>

                     
           <div className="input-wrap">
                <label htmlFor="email">Email address</label>
                <input type="email" value={inputValues.email} onChange={handleChange} id="eMail" name="email" placeholder="Enter email address..." />
                <small>{inputErrors.email}</small>
            </div>
            
            <div className="input-wrap">
                <label htmlFor="password">Password</label>
                <input type="password" value={inputValues.password} onChange={handleChange} id="password" name="password" placeholder="Password" />
                <small>{inputErrors.password}</small>
            </div>
    
            <button className="signButton">Sign Up</button>
    
            
        </form>

        <p className="hav-acct">Already have an account?
            <span className="login">
             <a href="#">Login.</a>
            </span>
        </p>

        

        
    </div>
    );
}

export default SignUp;