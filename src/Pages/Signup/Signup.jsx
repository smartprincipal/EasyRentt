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
        if(values.username) {
            errors.username = "Enter your first name"
        }
        if(!values.email) {
            errors.email = "Enter your e-mail address"
        }
        if(!values.password) {
            errors.password = "Create a password, it is required"
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
                <input type="text" value={inputValues.username} onChange={handleChange} id="firstName" name="username" placeholder="Enter first name..." required />
                <small>{inputErrors.username}</small>
            </div>

                     
           <div className="input-wrap">
                <label htmlFor="email">Email address</label>
                <input type="email" value={inputValues.email} onChange={handleChange} id="eMail" name="email" placeholder="Enter email address..." required />
                <small>{inputErrors.email}</small>
            </div>
            
            <div className="input-wrap">
                <label htmlFor="password">Password</label>
                <input type="password" value={inputValues.password} onChange={handleChange} id="password" name="password" placeholder="Password" required />
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